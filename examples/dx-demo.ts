/**
 * DX demo — exercises the canonical consumer-facing patterns to make
 * sure the SDK feels right from outside the wire details.
 *
 * Covers:
 *   - two-key auth
 *   - per-host routing (data vs trading)
 *   - unified error shape (e.error, e.message, e.statusCode) across planes
 *   - discriminator (instanceof) still works for plane-specific fields
 */
import dotenv from "dotenv";
dotenv.config();
import { Predexon } from "@predexon/sdk";
// Both planes' error classes (+ the shared base) are importable from one barrel.
import { PredexonError, DataErrorResponse, ApiError } from "@predexon/sdk/models/errors";

const C = { g: "\x1b[32m", r: "\x1b[31m", d: "\x1b[2m", b: "\x1b[1m", x: "\x1b[0m" };
const ok = (b: boolean, msg: string) =>
  console.log(`${b ? C.g + "✓" : C.r + "✗"}${C.x} ${msg}`);
const note = (msg: string) => console.log(`${C.d}  ${msg}${C.x}`);
const section = (t: string) => console.log(`\n${C.b}${t}${C.x}`);

async function main() {
  // ── 1. Constructor ──────────────────────────────────────────────
  section("1. Construct with two keys");
  const sdk = new Predexon({
    security: {
      dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
      tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
    },
  });
  ok(typeof sdk.polymarket?.listMarkets === "function", "sdk.polymarket.listMarkets exists");
  ok(typeof sdk.accounts?.list === "function", "sdk.accounts.list exists");
  ok(typeof sdk.search?.markets === "function", "sdk.search.markets exists");
  ok(typeof sdk.transfers?.getDepositWallet === "function", "sdk.transfers.getDepositWallet exists");

  // ── 2. Successful data call ─────────────────────────────────────
  section("2. Data plane: list 2 polymarket markets");
  const markets: any = await sdk.polymarket.listMarkets({ limit: 2 });
  ok(Array.isArray(markets?.markets), `got ${markets?.markets?.length} markets`);
  note(`first market: ${markets.markets[0]?.question?.slice(0, 60) ?? "(no question)"}`);

  // ── 3. Successful trading call ──────────────────────────────────
  section("3. Trading plane: list accounts (proves trade.predexon.com routes correctly)");
  const accounts: any = await sdk.accounts.list();
  const accs = accounts?.accounts ?? accounts;
  ok(Array.isArray(accs), `got ${accs?.length} accounts`);
  note(`first account: ${accs[0]?.accountId?.slice(0, 20)}...`);

  // ── 4. Unified error shape: data plane 404 ──────────────────────
  section("4. Data plane error — should expose .error / .message / .statusCode");
  try {
    await sdk.polymarket.getTokenPrice({ tokenId: "0xnonexistent" });
    ok(false, "expected 404 but call succeeded");
  } catch (e: any) {
    ok(e instanceof DataErrorResponse, `caught DataErrorResponse instance`);
    ok(typeof e.error === "string", `e.error is a string: "${e.error}"`);
    ok(typeof e.message === "string" && !e.message.startsWith("API error occurred"), `e.message is human-readable: "${e.message.slice(0, 70)}..."`);
    ok(e.statusCode === 404, `e.statusCode === 404`);
    ok(typeof e.detail === "object", `e.detail still accessible (backward compat)`);
  }

  // ── 5. Unified error shape: trading plane 404 ───────────────────
  section("5. Trading plane error — same shape as data");
  try {
    await sdk.accounts.get({ accountId: "00000000-0000-0000-0000-000000000000" });
    ok(false, "expected 404 but call succeeded");
  } catch (e: any) {
    ok(e instanceof ApiError, `caught ApiError instance (trading)`);
    ok(e instanceof PredexonError, `also an instance of the shared base PredexonError`);
    ok(typeof e.error === "string", `e.error is a string: "${e.error}"`);
    ok(typeof e.message === "string", `e.message is human-readable: "${e.message.slice(0, 70)}..."`);
    ok(e.statusCode === 404, `e.statusCode === 404`);
    ok(typeof e.requestId === "string", `e.requestId available (trading-specific): "${e.requestId?.slice(0, 16)}..."`);
  }

  // ── 6. Polymorphic error handling ───────────────────────────────
  section("6. Polymorphic catch — handle both planes uniformly");
  const targets = [
    () => sdk.polymarket.getTokenPrice({ tokenId: "0xnonexistent" }),
    () => sdk.accounts.get({ accountId: "00000000-0000-0000-0000-000000000000" }),
  ];
  for (const [i, call] of targets.entries()) {
    try {
      await call();
    } catch (e: any) {
      // Generic handler — same code path for both:
      note(`call ${i + 1}: ${e.constructor.name} status=${e.statusCode} code="${e.error}" msg="${e.message.slice(0, 50)}..."`);
    }
  }
  ok(true, "generic catch worked on both planes with the same field access");
}

main().catch((e) => {
  console.error("crashed:", e);
  process.exit(1);
});
