# Polymarket

## Overview

### Available Operations

* [getWalletPnL](#getwalletpnl) - Get Wallet Pnl
* [getWalletPositions](#getwalletpositions) - Get Wallet Positions
* [getWalletVolumeChart](#getwalletvolumechart) - Get Wallet Volume Chart
* [getWalletIdentity](#getwalletidentity) - Get Wallet Identity
* [getWalletIdentities](#getwalletidentities) - Get Wallet Identities
* [getCandlesticks](#getcandlesticks) - Get Candlesticks
* [getTokenPrice](#gettokenprice) - Get Market Price
* [getActivity](#getactivity) - Get Activity
* [listMarkets](#listmarkets) - Get Markets
* [listMarketsKeyset](#listmarketskeyset) - List Markets (Keyset Pagination)
* [getVolumeTimeSeries](#getvolumetimeseries) - Get Market Volume Time Series
* [getOpenInterestTimeSeries](#getopeninteresttimeseries) - Get Market Open Interest Time Series
* [getOrderbookHistory](#getorderbookhistory) - Get Orderbooks
* [getTrades](#gettrades) - Get Trades
* [getVolumeChart](#getvolumechart) - Get Volume Chart
* [getWalletProfile](#getwalletprofile) - Get Wallet Profile
* [getWalletProfiles](#getwalletprofiles) - Get Wallet Profiles Batch
* [getLeaderboard](#getleaderboard) - Get Leaderboard
* [getMarketLeaderboard](#getmarketleaderboard) - Get Market Leaderboard
* [getMarketTopHolders](#getmarkettopholders) - Get Market Top Holders
* [getWalletMarkets](#getwalletmarkets) - Get Wallet Markets
* [filterWalletsByMarkets](#filterwalletsbymarkets) - Filter Wallets By Markets
* [listSmartActivityMarkets](#listsmartactivitymarkets) - Get Smart Activity Markets
* [getSmartMoneyPositioning](#getsmartmoneypositioning) - Get Smart Money Positioning
* [getSimilarWallets](#getsimilarwallets) - Get Similar Wallets
* [getCohortStats](#getcohortstats) - Get Cohort Stats
* [listCryptoMarkets](#listcryptomarkets) - Get Crypto Updown
* [listEvents](#listevents) - Get Events
* [listEventsKeyset](#listeventskeyset) - Get Events Keyset
* [listAllPositions](#listallpositions) - Get All Positions
* [getUmaMarket](#getumamarket) - Get Uma Market
* [listUmaMarkets](#listumamarkets) - List Uma Markets
* [getCandlesticksByToken](#getcandlesticksbytoken) - Get Candlesticks By Token
* [getConnectedWallets](#getconnectedwallets) - Connected wallets for an address (graph-based)
* [getBuilderLeaderboard](#getbuilderleaderboard) - Get Builder Leaderboard
* [getBuilderStats](#getbuilderstats) - Get Builder Stats
* [getBuilderMarkets](#getbuildermarkets) - Get Builder Markets
* [getBuilderTimeSeries](#getbuildertimeseries) - Get Builder Timeseries

## getWalletPnL

Fetch realized profit and loss (PnL) for a specific wallet address.

Returns realized gains only - from confirmed sells or redeems.

When condition_id is provided, returns realized PnL for that specific market only.
This handles split/merge operations correctly by aggregating both sides.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletPnL" method="get" path="/v2/polymarket/wallet/pnl/{wallet}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletPnL({
    wallet: "<value>",
    granularity: "day",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletPnL } from "@predexon/sdk/funcs/polymarket-get-wallet-pn-l.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletPnL(predexon, {
    wallet: "<value>",
    granularity: "day",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletPnL failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletPnLRequest](../../models/operations/polymarket-get-wallet-pn-l-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletPnLResponse](../../models/data/wallet-pn-l-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletPositions

Fetch current positions for a wallet address.

Returns all open positions with cost basis, current market prices, and P&L calculations.
Supports filtering by market_slug or condition_id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletPositions" method="get" path="/v2/polymarket/wallet/positions/{wallet}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletPositions({
    wallet: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletPositions } from "@predexon/sdk/funcs/polymarket-get-wallet-positions.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletPositions(predexon, {
    wallet: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletPositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletPositionsRequest](../../models/operations/polymarket-get-wallet-positions-request.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletPositionsResponse](../../models/data/wallet-positions-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletVolumeChart

Fetch volume chart data for a wallet, broken down by BUY/SELL side.

Returns per-period total, BUY, and SELL volume aggregated from trade events
where the wallet was the maker (providing liquidity).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletVolumeChart" method="get" path="/v2/polymarket/wallet/volume-chart/{wallet}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletVolumeChart({
    wallet: "<value>",
    startTime: 711804,
    endTime: 822640,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletVolumeChart } from "@predexon/sdk/funcs/polymarket-get-wallet-volume-chart.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletVolumeChart(predexon, {
    wallet: "<value>",
    startTime: 711804,
    endTime: 822640,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletVolumeChart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletVolumeChartRequest](../../models/operations/polymarket-get-wallet-volume-chart-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletVolumeChartResponse](../../models/data/wallet-volume-chart-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletIdentity

Fetch identity + profile metadata for a wallet:
display name, pseudonym, profile image (pfp), X handle, verified/creator/mod
badges, type (proxy/safe/eoa), signer, USDC balance, and timestamps.

Lookup matches against either the proxy address (`wallet.id`) or the
underlying signer EOA (`wallet.signer`).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletIdentity" method="get" path="/v2/polymarket/wallet/identity/{wallet}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletIdentity({
    wallet: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletIdentity } from "@predexon/sdk/funcs/polymarket-get-wallet-identity.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletIdentity(predexon, {
    wallet: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletIdentityRequest](../../models/operations/polymarket-get-wallet-identity-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletIdentityResponse](../../models/data/wallet-identity-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletIdentities

Bulk identity lookup. Accepts up to 200 addresses (proxy or signer EOA);
returns a map of lowercase address → profile. Both `id` and `signer` of each
matched row are keys in the result so callers can look up by whichever they
queried with. Missing addresses are simply absent from the map.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletIdentities" method="post" path="/v2/polymarket/wallet/identities" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletIdentities({
    addresses: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletIdentities } from "@predexon/sdk/funcs/polymarket-get-wallet-identities.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletIdentities(predexon, {
    addresses: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletIdentities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [data.WalletIdentitiesRequest](../../models/data/wallet-identities-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletIdentitiesResponse](../../models/data/wallet-identities-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCandlesticks

Fetch historical candlestick data for a market.

Returns combined OHLCV data from both YES and NO tokens, normalized to YES perspective.
NO token prices are converted as (1 - price) and volumes are combined.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetCandlesticks" method="get" path="/v2/polymarket/candlesticks/{condition_id}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getCandlesticks({
    conditionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetCandlesticks } from "@predexon/sdk/funcs/polymarket-get-candlesticks.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetCandlesticks(predexon, {
    conditionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetCandlesticks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetCandlesticksRequest](../../models/operations/polymarket-get-candlesticks-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.CandlesticksResponse](../../models/data/candlesticks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getTokenPrice

Fetch the current or historical market price for a token.

Uses last 5 trades across both tokens (Yes/No) of the market:
- If all prices within $0.10: weighted average by USD amount
- Otherwise: last traded price

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetTokenPrice" method="get" path="/v2/polymarket/market-price/{token_id}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getTokenPrice({
    tokenId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetTokenPrice } from "@predexon/sdk/funcs/polymarket-get-token-price.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetTokenPrice(predexon, {
    tokenId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetTokenPrice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetTokenPriceRequest](../../models/operations/polymarket-get-token-price-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.MarketPriceResponse](../../models/data/market-price-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getActivity

Fetch activity data for a specific user.

Returns SPLIT, MERGE, REDEEM, and CONVERT events from the unified activity table.

Note on CONVERT rows: these are NegRisk position conversions (sell NO tokens on a
subset of conditions, buy YES tokens on the remainder). Their `condition_id` field
actually carries the NegRisk parent market_id, not a CTF condition_id, so the
Postgres market-metadata lookup will return empty market_slug/title for them.
Filtering by condition_id will not match conversions — conversions are a
market-level operation, not a per-outcome one.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetActivity" method="get" path="/v2/polymarket/activity" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getActivity({
    wallet: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetActivity } from "@predexon/sdk/funcs/polymarket-get-activity.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetActivity(predexon, {
    wallet: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetActivityRequest](../../models/operations/polymarket-get-activity-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.ActivityResponse](../../models/data/activity-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listMarkets

List markets with filtering and sorting.

Consolidates active and closed markets into a single endpoint.
Use status=open for active markets only.

Rolling metrics (volume_1d/7d/30d, trades, OI) are refreshed hourly.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListMarkets" method="get" path="/v2/polymarket/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listMarkets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListMarkets } from "@predexon/sdk/funcs/polymarket-list-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListMarkets(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListMarketsRequest](../../models/operations/polymarket-list-markets-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.PolymarketMarketsResponse](../../models/data/polymarket-markets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listMarketsKeyset

List markets with the same filters and sort options as /v2/polymarket/markets, but use cursor-based keyset pagination via pagination_key instead of offset.

Use this endpoint for large backfills and deep pagination. It avoids the performance cost of skipping large offsets and does not return a total count.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListMarketsKeyset" method="get" path="/v2/polymarket/markets/keyset" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listMarketsKeyset({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListMarketsKeyset } from "@predexon/sdk/funcs/polymarket-list-markets-keyset.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListMarketsKeyset(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListMarketsKeyset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListMarketsKeysetRequest](../../models/operations/polymarket-list-markets-keyset-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.PolymarketMarketsKeysetResponse](../../models/data/polymarket-markets-keyset-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getVolumeTimeSeries

Return historical time series of traded volume for a token (day+ granularity).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetVolumeTimeSeries" method="get" path="/v2/polymarket/markets/{token_id}/volume" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getVolumeTimeSeries({
    tokenId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetVolumeTimeSeries } from "@predexon/sdk/funcs/polymarket-get-volume-time-series.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetVolumeTimeSeries(predexon, {
    tokenId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetVolumeTimeSeries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetVolumeTimeSeriesRequest](../../models/operations/polymarket-get-volume-time-series-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.MarketVolumeTimeSeriesResponse](../../models/data/market-volume-time-series-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOpenInterestTimeSeries

Provide historical open interest (total value of tokens circulating from split, merge, redeem, and conversion events) with min granularity day.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetOpenInterestTimeSeries" method="get" path="/v2/polymarket/markets/{condition_id}/open_interest" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getOpenInterestTimeSeries({
    conditionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetOpenInterestTimeSeries } from "@predexon/sdk/funcs/polymarket-get-open-interest-time-series.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetOpenInterestTimeSeries(predexon, {
    conditionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetOpenInterestTimeSeries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetOpenInterestTimeSeriesRequest](../../models/operations/polymarket-get-open-interest-time-series-request.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.MarketOpenInterestTimeSeriesResponse](../../models/data/market-open-interest-time-series-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOrderbookHistory

Fetch historical orderbook snapshots for a specific asset (token ID) over a specified time range.

Returns snapshots of the order book including bids, asks, and market metadata in order.
All timestamps are in milliseconds. Orderbook data has history starting from January 1st, 2026.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetOrderbookHistory" method="get" path="/v2/polymarket/orderbooks" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getOrderbookHistory({
    tokenId: "<id>",
    startTime: 505509,
    endTime: 95234,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetOrderbookHistory } from "@predexon/sdk/funcs/polymarket-get-orderbook-history.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetOrderbookHistory(predexon, {
    tokenId: "<id>",
    startTime: 505509,
    endTime: 95234,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetOrderbookHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetOrderbookHistoryRequest](../../models/operations/polymarket-get-orderbook-history-request.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.OrderbooksResponse](../../models/data/orderbooks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getTrades

Fetch historical trade data.

Returns trades from Polymarket with support for:
- Filtering by market_slug, condition_id, token_id, or wallet
- Time range filtering (start_time, end_time)
- Minimum trade amount filtering (min_total)
- Cursor-based pagination
- Global "all trades" mode (no filters) - returns trades across all markets

**All Trades Mode:**
When no market/wallet filter is provided, returns global trades newest-first.
- Only DESC order is supported (returns 400 if order=asc)
- First page defaults to last 24 hours for fast queries
- Pagination automatically extends the time range as you page back
- Provide start_time or end_time to query specific time ranges

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetTrades" method="get" path="/v2/polymarket/trades" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getTrades({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetTrades } from "@predexon/sdk/funcs/polymarket-get-trades.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetTrades(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetTrades failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetTradesRequest](../../models/operations/polymarket-get-trades-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.TradesResponse](../../models/data/trades-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getVolumeChart

Fetch volume chart data for a market, broken down by YES/NO side.

Returns per-period total, YES, and NO volume aggregated from trade events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetVolumeChart" method="get" path="/v2/polymarket/volume-chart/{condition_id}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getVolumeChart({
    conditionId: "<id>",
    startTime: 99590,
    endTime: 608606,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetVolumeChart } from "@predexon/sdk/funcs/polymarket-get-volume-chart.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetVolumeChart(predexon, {
    conditionId: "<id>",
    startTime: 99590,
    endTime: 608606,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetVolumeChart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetVolumeChartRequest](../../models/operations/polymarket-get-volume-chart-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.VolumeChartResponse](../../models/data/volume-chart-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletProfile

Get complete smart wallet profile.

Returns all metrics across all time windows and style classifications.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletProfile" method="get" path="/v2/polymarket/wallet/{wallet}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletProfile({
    wallet: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletProfile } from "@predexon/sdk/funcs/polymarket-get-wallet-profile.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletProfile(predexon, {
    wallet: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletProfile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletProfileRequest](../../models/operations/polymarket-get-wallet-profile-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletProfileResponse](../../models/data/wallet-profile-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 404                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletProfiles

Get wallet profiles for multiple addresses in a single request.

Returns the same data as the single wallet profile endpoint, but for multiple wallets.
Wallets not found are omitted from the response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletProfiles" method="get" path="/v2/polymarket/wallets/profiles" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletProfiles({
    addresses: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletProfiles } from "@predexon/sdk/funcs/polymarket-get-wallet-profiles.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletProfiles(predexon, {
    addresses: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletProfiles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletProfilesRequest](../../models/operations/polymarket-get-wallet-profiles-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletProfileResponse[]](../../models/.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getLeaderboard

Get global leaderboard of smart wallets.

Supports filtering by trading styles and numeric thresholds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetLeaderboard" method="get" path="/v2/polymarket/leaderboard" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getLeaderboard({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetLeaderboard } from "@predexon/sdk/funcs/polymarket-get-leaderboard.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetLeaderboard(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetLeaderboard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetLeaderboardRequest](../../models/operations/polymarket-get-leaderboard-request.md)                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.LeaderboardResponse](../../models/data/leaderboard-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getMarketLeaderboard

Get leaderboard for a specific market.

Shows wallet rankings for trading performance within a single market.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetMarketLeaderboard" method="get" path="/v2/polymarket/leaderboard/market/{condition_id}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getMarketLeaderboard({
    conditionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetMarketLeaderboard } from "@predexon/sdk/funcs/polymarket-get-market-leaderboard.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetMarketLeaderboard(predexon, {
    conditionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetMarketLeaderboard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetMarketLeaderboardRequest](../../models/operations/polymarket-get-market-leaderboard-request.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.MarketLeaderboardResponse](../../models/data/market-leaderboard-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getMarketTopHolders

Get top holders for a specific market, ranked by position size.

Use the 'side' parameter to filter by Yes or No holders:
- side=yes: Top holders betting on Yes outcome
- side=no: Top holders betting on No outcome

Returns wallets with the largest positions in this market, including
their position value, entry price, and realized/unrealized PnL.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetMarketTopHolders" method="get" path="/v2/polymarket/market/{condition_id}/top-holders" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getMarketTopHolders({
    conditionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetMarketTopHolders } from "@predexon/sdk/funcs/polymarket-get-market-top-holders.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetMarketTopHolders(predexon, {
    conditionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetMarketTopHolders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetMarketTopHoldersRequest](../../models/operations/polymarket-get-market-top-holders-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.TopHoldersResponse](../../models/data/top-holders-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getWalletMarkets

Get per-market breakdown for a wallet.

Shows performance metrics for each market the wallet has traded in.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetWalletMarkets" method="get" path="/v2/polymarket/wallet/{wallet}/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getWalletMarkets({
    wallet: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetWalletMarkets } from "@predexon/sdk/funcs/polymarket-get-wallet-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetWalletMarkets(predexon, {
    wallet: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetWalletMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetWalletMarketsRequest](../../models/operations/polymarket-get-wallet-markets-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletMarketsResponse](../../models/data/wallet-markets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## filterWalletsByMarkets

Filter wallets by market trades with AND/OR logic, with metric filters on combined performance.

**Use Cases:**
- Find all wallets that traded Market A AND Market B AND Market C (intersection)
- Find all wallets that traded Market A OR Market B OR Market C (union)
- Filter by combined performance: wallets with combined win_rate > 50% across these markets

**Query Logic:**
- AND: Returns wallets that have traded ALL specified markets
- OR: Returns wallets that have traded ANY of the specified markets

**Metrics:**
All metrics (realized_pnl, volume, win_rate, roi, profit_factor) are aggregated across the
specified markets only. Derived metrics (win_rate, ROI, profit_factor) are properly
calculated from underlying sums, not averaged.

Uses ClickHouse for fast aggregation across markets.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketFilterWalletsByMarkets" method="get" path="/v2/polymarket/wallets/filter" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.filterWalletsByMarkets({
    markets: "0x123,0x456,0x789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketFilterWalletsByMarkets } from "@predexon/sdk/funcs/polymarket-filter-wallets-by-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketFilterWalletsByMarkets(predexon, {
    markets: "0x123,0x456,0x789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketFilterWalletsByMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketFilterWalletsByMarketsRequest](../../models/operations/polymarket-filter-wallets-by-markets-request.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletFilterResponse](../../models/data/wallet-filter-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listSmartActivityMarkets

Discover markets where high-performing wallets are active.

**Use Case:** Find alpha by seeing where profitable traders are putting their money.

**How it works:**
1. Define "smart wallets" using the filter criteria (min_realized_pnl, min_total_pnl, min_roi, etc.)
2. Find all markets these wallets have traded
3. Rank markets by smart wallet activity (volume, count, realized PnL)

**Filter Requirements:**

At least one "strong" filter must meet configured minimum thresholds.
Defaults in this service:
- `min_realized_pnl >= 5000` ($5,000+ PnL)
- `min_total_pnl >= 5000` ($5,000+ net total PnL)
- `min_roi >= 0.15` (15%+ ROI)
- `min_trades >= 100` (100+ trades)
- `min_volume >= 10000` ($10,000+ volume)

If using `min_win_rate` or `min_profit_factor` without a strong filter,
you must also specify `min_trades >= 50`.

These requirements ensure meaningful wallet filtering and fast query performance.

Returns markets sorted by smart wallet activity metrics.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListSmartActivityMarkets" method="get" path="/v2/polymarket/markets/smart-activity" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listSmartActivityMarkets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListSmartActivityMarkets } from "@predexon/sdk/funcs/polymarket-list-smart-activity-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListSmartActivityMarkets(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListSmartActivityMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListSmartActivityMarketsRequest](../../models/operations/polymarket-list-smart-activity-markets-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.SmartActivityResponse](../../models/data/smart-activity-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getSmartMoneyPositioning

Get smart money positioning for a specific market.

**Use Case:** See what profitable traders are doing on a specific market.

**Filter Requirements:**

At least one "strong" filter must meet these minimum thresholds:
- `min_realized_pnl >= 1000` ($1,000+ PnL)
- `min_total_pnl >= 1000` ($1,000+ net total PnL)
- `min_roi >= 0.15` (15%+ ROI)
- `min_trades >= 100` (100+ trades)
- `min_volume >= 10000` ($10,000+ volume)

If using `min_win_rate` or `min_profit_factor` without a strong filter,
you must also specify `min_trades >= 50`.

**Returns:**
- How many smart wallets are net buyers vs net sellers
- Average entry prices for smart wallets
- Total volume and realized PnL from smart wallets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetSmartMoneyPositioning" method="get" path="/v2/polymarket/market/{condition_id}/smart-money" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getSmartMoneyPositioning({
    conditionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetSmartMoneyPositioning } from "@predexon/sdk/funcs/polymarket-get-smart-money-positioning.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetSmartMoneyPositioning(predexon, {
    conditionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetSmartMoneyPositioning failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetSmartMoneyPositioningRequest](../../models/operations/polymarket-get-smart-money-positioning-request.md)                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.SmartMoneyResponse](../../models/data/smart-money-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getSimilarWallets

Find wallets with similar market portfolios (copy-trade detection).

**Use Case:**
- Find wallets that trade similar markets to a target wallet
- Detect potential copy-trading patterns
- Discover traders with similar strategies

**How it works:**
1. Get all markets the target wallet has traded
2. Find other wallets that traded the same markets
3. Rank by overlap percentage and count

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetSimilarWallets" method="get" path="/v2/polymarket/wallet/{wallet}/similar" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getSimilarWallets({
    wallet: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetSimilarWallets } from "@predexon/sdk/funcs/polymarket-get-similar-wallets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetSimilarWallets(predexon, {
    wallet: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetSimilarWallets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetSimilarWalletsRequest](../../models/operations/polymarket-get-similar-wallets-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.WalletSimilarityResponse](../../models/data/wallet-similarity-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCohortStats

Compare performance across trading style cohorts.

**Use Case:** Understand which trading styles perform best.

**Cohorts:** Based on primary_trading_style classification:
- WHALE: Large position traders
- MARKET_MAKER: Balanced buy/sell with frequent trading
- ACTIVE_TRADER: High trade frequency
- BUY_AND_HOLD: Long holding periods
- DEGEN: High-risk patterns
- HIGH_CONVICTION: Buys at high prices
- CONTRARIAN: Takes unpopular sides
- VALUE_HUNTER: Enters at uncertain odds

Returns aggregate statistics for each cohort.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetCohortStats" method="get" path="/v2/polymarket/cohorts/stats" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getCohortStats();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetCohortStats } from "@predexon/sdk/funcs/polymarket-get-cohort-stats.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetCohortStats(predexon);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetCohortStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetCohortStatsRequest](../../models/operations/polymarket-get-cohort-stats-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.CohortComparisonResponse](../../models/data/cohort-comparison-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 503                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listCryptoMarkets

List crypto up/down prediction markets.

Returns Bitcoin, Ethereum, Solana, XRP, HYPE, Dogecoin, and BNB up/down
markets across all timeframes (5m, 15m, 1h, 4h, daily). Supports filtering
by asset, timeframe, status, and time range.

**Common queries:**
- Current open markets: `?status=open`
- BTC 15m timeline: `?asset=btc&timeframe=15m&sort=asc`
- Recent BTC 15m results: `?asset=btc&timeframe=15m&status=closed&limit=20`
- Time window: `?end_after=<unix_ts>&end_before=<unix_ts>&sort=asc`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListCryptoMarkets" method="get" path="/v2/polymarket/crypto-updown" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listCryptoMarkets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListCryptoMarkets } from "@predexon/sdk/funcs/polymarket-list-crypto-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListCryptoMarkets(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListCryptoMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListCryptoMarketsRequest](../../models/operations/polymarket-list-crypto-markets-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.CryptoUpDownResponse](../../models/data/crypto-up-down-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listEvents

List events with filtering and sorting.

Events are top-level groupings that contain one or more markets.
Use status=open for active events only.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListEvents" method="get" path="/v2/polymarket/events" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listEvents({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListEvents } from "@predexon/sdk/funcs/polymarket-list-events.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListEvents(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListEventsRequest](../../models/operations/polymarket-list-events-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.PolymarketEventsResponse](../../models/data/polymarket-events-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listEventsKeyset

List events with filtering and sorting using keyset pagination.

This mirrors /events but uses pagination_key instead of offset/total to
keep deep pagination stable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListEventsKeyset" method="get" path="/v2/polymarket/events/keyset" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listEventsKeyset({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListEventsKeyset } from "@predexon/sdk/funcs/polymarket-list-events-keyset.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListEventsKeyset(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListEventsKeyset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListEventsKeysetRequest](../../models/operations/polymarket-list-events-keyset-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.PolymarketEventsKeysetResponse](../../models/data/polymarket-events-keyset-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listAllPositions

Fetch all user positions with filtering and pagination.

Designed for analytics and streaming use cases where clients need to:
- Backfill historical position data
- Stream new position updates as they come in

Use `min_block` to start from a specific block (for backfill).
Use `order=asc` to get oldest first (for streaming/backfill).
Use `order=desc` to get latest first (for recent data).

The pagination cursor encodes the last position's block/timestamp and IDs,
allowing efficient continuation from any point.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListAllPositions" method="get" path="/v2/polymarket/positions" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listAllPositions({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListAllPositions } from "@predexon/sdk/funcs/polymarket-list-all-positions.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListAllPositions(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListAllPositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListAllPositionsRequest](../../models/operations/polymarket-list-all-positions-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.AllPositionsResponse](../../models/data/all-positions-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getUmaMarket

Return the current UMA oracle status for a market plus its event timeline.

Set `events_limit=0` if you only want the status header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetUmaMarket" method="get" path="/v2/polymarket/uma/market/{condition_id}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getUmaMarket({
    conditionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetUmaMarket } from "@predexon/sdk/funcs/polymarket-get-uma-market.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetUmaMarket(predexon, {
    conditionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetUmaMarket failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetUmaMarketRequest](../../models/operations/polymarket-get-uma-market-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.UmaMarketDetailResponse](../../models/data/uma-market-detail-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listUmaMarkets

List UMA questions filtered by state. Sorted by `last_event_at DESC`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketListUmaMarkets" method="get" path="/v2/polymarket/uma/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.listUmaMarkets({
    state: "New Jersey",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketListUmaMarkets } from "@predexon/sdk/funcs/polymarket-list-uma-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketListUmaMarkets(predexon, {
    state: "New Jersey",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketListUmaMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketListUmaMarketsRequest](../../models/operations/polymarket-list-uma-markets-request.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.UmaMarketsListResponse](../../models/data/uma-markets-list-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCandlesticksByToken

Fetch historical candlestick data for a single outcome token.

Returns raw OHLCV data for this specific token — no YES/NO normalization is
applied, so NO-token prices stay as NO prices (e.g. ~$0.30 in a 70/30 market).
Volume is only from trades of this token; summing the YES and NO token volumes
over the same window approximates the condition-level volume.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetCandlesticksByToken" method="get" path="/v2/polymarket/candlesticks/token/{token_id}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getCandlesticksByToken({
    tokenId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetCandlesticksByToken } from "@predexon/sdk/funcs/polymarket-get-candlesticks-by-token.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetCandlesticksByToken(predexon, {
    tokenId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetCandlesticksByToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetCandlesticksByTokenRequest](../../models/operations/polymarket-get-candlesticks-by-token-request.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.CandlesticksResponse](../../models/data/candlesticks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getConnectedWallets

Returns sibling wallets discovered via the on-chain transfer graph (USDC, pUSD, CTF) plus identity-proof signals (shared signer, shared X username, shared first funder). Confidence is 0-100; ≥70 indicates strong evidence. On a cache miss the endpoint returns 202 and computes the cluster in the background — the next call returns the full result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetConnectedWallets" method="get" path="/v2/polymarket/wallet/{address}/cluster" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getConnectedWallets({
    address: "90731 Farrell Shore",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetConnectedWallets } from "@predexon/sdk/funcs/polymarket-get-connected-wallets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetConnectedWallets(predexon, {
    address: "90731 Farrell Shore",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetConnectedWallets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetConnectedWalletsRequest](../../models/operations/polymarket-get-connected-wallets-request.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.PolymarketGetConnectedWalletsResponse](../../models/operations/polymarket-get-connected-wallets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getBuilderLeaderboard

Ranked list of builders over the window.

Defaults to ranking by attributed volume; `sort_by=fee` ranks by
`builder_fee_usd` instead (more useful when looking at revenue-earning
builders, since the highest-volume builders often charge 0 bps).

Computes builder_fee_usd per row from order_filled_with_builder_fee_view
(which joins the current builder_fee_rates_current view), then aggregates.
Excludes V1 fills, the zero-sentinel builder, and rows with sign != 1.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetBuilderLeaderboard" method="get" path="/v2/polymarket/builders/leaderboard" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getBuilderLeaderboard({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetBuilderLeaderboard } from "@predexon/sdk/funcs/polymarket-get-builder-leaderboard.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetBuilderLeaderboard(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetBuilderLeaderboard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetBuilderLeaderboardRequest](../../models/operations/polymarket-get-builder-leaderboard-request.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.BuilderLeaderboardResponse](../../models/data/builder-leaderboard-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getBuilderStats

Single-builder summary plus full (taker_bps, maker_bps) history.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetBuilderStats" method="get" path="/v2/polymarket/builders/{builder_code}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getBuilderStats({
    builderCode: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetBuilderStats } from "@predexon/sdk/funcs/polymarket-get-builder-stats.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetBuilderStats(predexon, {
    builderCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetBuilderStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetBuilderStatsRequest](../../models/operations/polymarket-get-builder-stats-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.BuilderStats](../../models/data/builder-stats.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getBuilderMarkets

Top markets attributed to a builder over the window.

Reads volume_by_builder_market_daily_view (per-(builder, market, day)
aggregate) for the volume/trade_count/uniq_traders, then joins
order_filled_with_builder_fee_view per-market for the precise
builder_fee_usd (since the daily MV doesn't track maker/taker split).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetBuilderMarkets" method="get" path="/v2/polymarket/builders/{builder_code}/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getBuilderMarkets({
    builderCode: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetBuilderMarkets } from "@predexon/sdk/funcs/polymarket-get-builder-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetBuilderMarkets(predexon, {
    builderCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetBuilderMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetBuilderMarketsRequest](../../models/operations/polymarket-get-builder-markets-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.BuilderMarketsResponse](../../models/data/builder-markets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getBuilderTimeSeries

Bucketed volume + builder_fee over a window.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="polymarketGetBuilderTimeSeries" method="get" path="/v2/polymarket/builders/{builder_code}/timeseries" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.polymarket.getBuilderTimeSeries({
    builderCode: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { polymarketGetBuilderTimeSeries } from "@predexon/sdk/funcs/polymarket-get-builder-time-series.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await polymarketGetBuilderTimeSeries(predexon, {
    builderCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("polymarketGetBuilderTimeSeries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PolymarketGetBuilderTimeSeriesRequest](../../models/operations/polymarket-get-builder-time-series-request.md)                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.BuilderTimeseriesResponse](../../models/data/builder-timeseries-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |