# Limitless

## Overview

### Available Operations

* [listMarkets](#listmarkets) - Get Limitless Markets
* [getOrderbookHistory](#getorderbookhistory) - Get Limitless Orderbooks

## listMarkets

List Limitless markets with filtering and sorting.

Returns markets from the Limitless prediction market platform with support for:
- Status filtering (open, closed)
- Trade type filtering (amm, clob)
- Text search in titles
- Category and tag filtering
- Volume and open interest thresholds
- Multiple sort options
- Cursor-based pagination via pagination_key

Prices are normalized to 0-1 range.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="limitlessListMarkets" method="get" path="/v2/limitless/markets" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.limitless.listMarkets({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { limitlessListMarkets } from "@predexon/sdk/funcs/limitless-list-markets.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await limitlessListMarkets(predexon, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("limitlessListMarkets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LimitlessListMarketsRequest](../../models/operations/limitless-list-markets-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.LimitlessMarketsResponse](../../models/data/limitless-markets-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getOrderbookHistory

Fetch historical orderbook snapshots for a Limitless market over a specified time range.

Returns YES-side orderbook snapshots. To derive the NO orderbook,
invert client-side: flip bids/asks and transform prices to 1 - price.
All timestamps are in milliseconds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="limitlessGetOrderbookHistory" method="get" path="/v2/limitless/orderbooks" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.limitless.getOrderbookHistory({
    marketSlug: "<value>",
    startTime: 780562,
    endTime: 353749,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { limitlessGetOrderbookHistory } from "@predexon/sdk/funcs/limitless-get-orderbook-history.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await limitlessGetOrderbookHistory(predexon, {
    marketSlug: "<value>",
    startTime: 780562,
    endTime: 353749,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("limitlessGetOrderbookHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LimitlessGetOrderbookHistoryRequest](../../models/operations/limitless-get-orderbook-history-request.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.LimitlessOrderbooksResponse](../../models/data/limitless-orderbooks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |