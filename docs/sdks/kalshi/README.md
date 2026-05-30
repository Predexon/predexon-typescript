# Kalshi

## Overview

### Available Operations

* [listMarkets](#listmarkets) - Get Kalshi Markets
* [getTrades](#gettrades) - Get Kalshi Trades
* [getOrderbookHistory](#getorderbookhistory) - Get Kalshi Orderbooks

## listMarkets

List Kalshi markets with filtering and sorting.

Returns markets from the Kalshi prediction market platform with support for:
- Status filtering (open, closed)
- Price range filtering (0-100 scale)
- Volume and open interest thresholds
- Text search in titles
- Filtering by ticker, event ticker, or series ticker
- Multiple sort options
- Cursor-based pagination via pagination_key

Prices are returned as decimals (0-1) for API consistency.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="kalshiListMarkets" method="get" path="/v2/kalshi/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.kalshi.listMarkets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { kalshiListMarkets } from "@predexon/sdk/funcs/kalshi-list-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await kalshiListMarkets(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kalshiListMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.KalshiListMarketsRequest](../../models/operations/kalshi-list-markets-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.KalshiMarketsResponse](../../models/data/kalshi-markets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getTrades

Fetch historical Kalshi trade data.

Returns trades from the Kalshi prediction market with support for:
- Filtering by ticker (exact match) or event_ticker (prefix match)
- Time range filtering
- Taker side filtering (yes/no)
- Minimum contract count filtering
- Cursor-based pagination

At least one of `ticker` or `event_ticker` must be provided.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="kalshiGetTrades" method="get" path="/v2/kalshi/trades" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.kalshi.getTrades({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { kalshiGetTrades } from "@predexon/sdk/funcs/kalshi-get-trades.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await kalshiGetTrades(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kalshiGetTrades failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.KalshiGetTradesRequest](../../models/operations/kalshi-get-trades-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.KalshiTradesResponse](../../models/data/kalshi-trades-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOrderbookHistory

Fetch historical orderbook snapshots for a Kalshi market over a specified time range.

Returns snapshots of the order book including yes bids, yes asks, and market metadata.
All timestamps are in milliseconds. Prices are in cents (1-99 representing $0.01 to $0.99).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="kalshiGetOrderbookHistory" method="get" path="/v2/kalshi/orderbooks" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.kalshi.getOrderbookHistory({
    ticker: "<value>",
    startTime: 476333,
    endTime: 903735,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { kalshiGetOrderbookHistory } from "@predexon/sdk/funcs/kalshi-get-orderbook-history.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await kalshiGetOrderbookHistory(predexon, {
    ticker: "<value>",
    startTime: 476333,
    endTime: 903735,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("kalshiGetOrderbookHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.KalshiGetOrderbookHistoryRequest](../../models/operations/kalshi-get-orderbook-history-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.KalshiOrderbooksResponse](../../models/data/kalshi-orderbooks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |