# @predexon/sdk examples

Runnable usage examples for the SDK.

## Setup

```bash
cd examples
npm install            # installs tsx, dotenv, and the SDK
cp .env.template .env  # then add your two API keys
```

```bash
PREDEXON_DATA_API_KEY=...      # data plane  → api.predexon.com
PREDEXON_TRADING_API_KEY=...   # trading plane → trade.predexon.com
```

Run any example with `tsx` from the `examples/` directory (so `.env` is picked up):

```bash
npx tsx dx-demo.ts
```

## Examples (read-only, safe)

| File | What it shows |
|------|---------------|
| `searchMarkets.example.ts` | Minimal cross-venue market search |
| `smoke-test.ts` | 5 read-only calls across both planes — a quick connectivity check |
| `dx-demo.ts` | Two-key setup, automatic per-host routing, and unified error handling (`.error` / `.message` / `.statusCode`) across both planes |
