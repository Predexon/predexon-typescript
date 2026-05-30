/**
 * Smoke test for @predexon/sdk
 *
 * Exercises both planes (data + trading), both API keys, both hosts.
 * Read-only — does not place orders, transfers, or anything that
 * costs money or moves funds.
 *
 * Run:
 *   cd examples
 *   PREDEXON_DATA_API_KEY=xxx PREDEXON_TRADING_API_KEY=yyy npx tsx smoke-test.ts
 *
 * Or put both keys in examples/.env and:
 *   cd examples && npx tsx smoke-test.ts
 */

import dotenv from "dotenv";
dotenv.config();

import { Predexon } from "@predexon/sdk";

const sdk = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

type Check = {
  name: string;
  plane: "data" | "trading";
  run: () => Promise<unknown>;
  describe: (result: any) => string;
};

const checks: Check[] = [
  {
    name: "polymarket.listMarkets({ limit: 3 })",
    plane: "data",
    run: () => sdk.polymarket.listMarkets({ limit: 3 }),
    describe: (r) => `got ${r?.markets?.length ?? "?"} markets`,
  },
  {
    name: "kalshi.listMarkets({ limit: 3 })",
    plane: "data",
    run: () => sdk.kalshi.listMarkets({ limit: 3 }),
    describe: (r) => `got ${r?.markets?.length ?? "?"} markets`,
  },
  {
    name: "polymarket.getTrades({ limit: 2 })",
    plane: "data",
    run: () => sdk.polymarket.getTrades({ limit: 2 }),
    describe: (r) => `got ${r?.trades?.length ?? "?"} trades`,
  },
  {
    name: "search.markets({ q: 'bitcoin' })",
    plane: "data",
    run: () => sdk.search.markets({ q: "bitcoin" }),
    describe: (r) =>
      `got ${r?.markets?.length ?? "?"} markets across ${r?.venuesSearched?.length ?? "?"} venues`,
  },
  {
    name: "accounts.list()",
    plane: "trading",
    run: () => sdk.accounts.list(),
    describe: (r) => {
      const n = Array.isArray(r) ? r.length : (r?.accounts?.length ?? "?");
      return `got ${n} accounts`;
    },
  },
];

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
};

function checkEnv(): { dataOk: boolean; tradingOk: boolean } {
  const dataOk = !!process.env["PREDEXON_DATA_API_KEY"];
  const tradingOk = !!process.env["PREDEXON_TRADING_API_KEY"];
  console.log(`${colors.bold}env keys:${colors.reset}`);
  console.log(
    `  PREDEXON_DATA_API_KEY:    ${dataOk ? colors.green + "set" : colors.yellow + "MISSING (data calls will 401)"}${colors.reset}`,
  );
  console.log(
    `  PREDEXON_TRADING_API_KEY: ${tradingOk ? colors.green + "set" : colors.yellow + "MISSING (trading calls will 401)"}${colors.reset}`,
  );
  console.log();
  return { dataOk, tradingOk };
}

async function main() {
  const env = checkEnv();
  let pass = 0;
  let fail = 0;
  let skipped = 0;

  for (const check of checks) {
    const haveKey = check.plane === "data" ? env.dataOk : env.tradingOk;
    if (!haveKey) {
      console.log(
        `${colors.yellow}SKIP${colors.reset}  ${check.plane.padEnd(7)} ${check.name}${colors.dim} (no key)${colors.reset}`,
      );
      skipped++;
      continue;
    }
    const t0 = Date.now();
    try {
      const result = await check.run();
      const ms = Date.now() - t0;
      console.log(
        `${colors.green}PASS${colors.reset}  ${check.plane.padEnd(7)} ${check.name}${colors.dim}  ${ms}ms  ${check.describe(result)}${colors.reset}`,
      );
      pass++;
    } catch (err: any) {
      const ms = Date.now() - t0;
      const statusCode = err?.statusCode ?? err?.status ?? "?";
      const msg =
        err?.body?.message ??
        err?.body?.error ??
        err?.message ??
        String(err);
      console.log(
        `${colors.red}FAIL${colors.reset}  ${check.plane.padEnd(7)} ${check.name}${colors.dim}  ${ms}ms${colors.reset}`,
      );
      console.log(
        `      ${colors.dim}→ ${err?.constructor?.name ?? "Error"} (status ${statusCode}): ${msg}${colors.reset}`,
      );
      fail++;
    }
  }

  console.log();
  console.log(
    `${colors.bold}${pass} passed, ${fail} failed, ${skipped} skipped${colors.reset}`,
  );
  process.exit(fail > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("smoke test crashed:", err);
  process.exit(1);
});
