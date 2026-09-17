# predexon-typescript

## What this is
PUBLIC mirror repo for the npm package `@predexon/sdk` (TypeScript, ESM-only) covering the Data API and (sunsetting) Trading API. Assembled one-way from the private `predexon-sdks` repo by `publish/sync-public.mjs`; this is the tree `npm publish` runs from. Status: active mirror, 3 commits (0.1.0/0.1.1/0.1.2); npm latest 0.1.2 (2026-05-30). A 0.1.4 build sits uncommitted in `../sdk/predexon-typescript-public`.

## Where it runs
- npm `@predexon/sdk` (`publishConfig.access: public`); GitHub `Predexon/predexon-typescript`. No CI; publish is manual after the private repo's gate is green:
```bash
npm install && npm run build && npm pack --pack-destination /tmp
node ../predexon-sdks/publish/smoke/run.mjs /tmp/predexon-sdk-<ver>.tgz   # gate
npm publish    # interactive npm login; never paste a token
```
- Runbook: `../_hub/runbooks/publish-predexon-sdk.md` (see `../predexon-sdks/PUBLISH_CHECKLIST.md`).

## Run locally
```bash
npm install
npm run build          # tsgo; prebuild only cleans esm/ (no patchers here)
cd examples && npm install && cp .env.template .env && npx tsx smoke-test.ts   # also dx-demo.ts, searchMarkets.example.ts
```

## Test/lint
- `npm run lint` (oxlint). No unit tests in this repo by design.

## Layout
- `src/index.ts` (exports `Predexon`, `HTTPClient`), `src/sdk/sdk.ts`, `src/sdk/*.ts` 12 namespaces
- `src/models/errors/` (`PredexonError`, `ApiError`, `DataErrorResponse`, `TradingErrorCode`), `src/models/{data,trading,operations}/`
- `src/funcs/*.ts` tree-shakeable standalone functions (`FUNCTIONS.md`)
- Subpaths: `@predexon/sdk`, `./models`, `./models/errors`, `./models/operations`, `./types`
- `docs/sdks/<ns>/README.md`, `docs/models/**` generated reference; `README.md` (usage guide); `RUNTIMES.md`; `CONTRIBUTING.md` (no PRs — generated)

## Data it reads/writes
- `https://api.predexon.com` and `https://trade.predexon.com`, `x-api-key` per plane. Env names: `PREDEXON_DATA_API_KEY`, `PREDEXON_TRADING_API_KEY`, `PREDEXON_DEBUG`. No storage.

## Depends on / consumed by
- Generated from `predexon-sdks`. Consumed by integrators; README links to docs.predexon.com where SDK pages were removed 2026-07-17 (links now redirect to `/`).

## Invariants and gotchas
- **Never hand-edit this repo.** Changes flow private → `sync-public.mjs` → here. Commits here must not carry `Co-Authored-By` trailers or private files (`scripts/`, `openapi/`, `.speakeasy/`, `examples/integration/`).
- Tarball ships only `esm/`, `src/`, `FUNCTIONS.md`, `RUNTIMES.md`, README, LICENSE, package.json.
- ESM-only; CJS consumers must `await import()`. `engines.node >=18` (0.1.4 raises to >=20).
- 0.1.2 constructor is `new Predexon({ security: { dataApiKey, tradingApiKey } })`; 0.1.4 flattens it and renames errors — breaking despite patch bump.
- Publishing is a human decision; never run `npm publish` from Claude.

## Current work / open items
- Publish next version from `../sdk/predexon-typescript-public` once the private 0.1.4 work is committed and gated (`../_hub/projects/sdk-0-1-4-release.md`).
- README/docs still reference removed public doc URLs; no SECURITY.md.

Hub: ../_hub/ (repos.md, architecture.md, repos/predexon-typescript.md, repos/sdk.md)

<!-- created 2026-09-07 from _hub bootstrap -->
