# Opinion

## Overview

### Available Operations

* [listMarkets](#listmarkets) - Get Opinion Markets
* [getOrderbookHistory](#getorderbookhistory) - Get Opinion Orderbooks

## listMarkets

List Opinion markets with filtering and sorting.

Returns tradeable markets (standalone binaries + categorical outcomes).
Categorical parent markets are excluded — use event_id or event_slug to
query all outcomes under a categorical grouping.

Prices in outcomes are currently null (future: from WebSocket/orderbook).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="opinionListMarkets" method="get" path="/v2/opinion/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.opinion.listMarkets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { opinionListMarkets } from "@predexon/sdk/funcs/opinion-list-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await opinionListMarkets(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("opinionListMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OpinionListMarketsRequest](../../models/operations/opinion-list-markets-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.OpinionMarketsResponse](../../models/data/opinion-markets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOrderbookHistory

Fetch historical orderbook snapshots for an Opinion market over a specified time range.

Returns YES-side orderbook snapshots. To derive the NO orderbook,
invert client-side: flip bids/asks and transform prices to 1 - price.
All timestamps are in milliseconds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="opinionGetOrderbookHistory" method="get" path="/v2/opinion/orderbooks" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.opinion.getOrderbookHistory({
    marketId: 206585,
    startTime: 482347,
    endTime: 140441,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { opinionGetOrderbookHistory } from "@predexon/sdk/funcs/opinion-get-orderbook-history.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await opinionGetOrderbookHistory(predexon, {
    marketId: 206585,
    startTime: 482347,
    endTime: 140441,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("opinionGetOrderbookHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OpinionGetOrderbookHistoryRequest](../../models/operations/opinion-get-orderbook-history-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.OpinionOrderbooksResponse](../../models/data/opinion-orderbooks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |