# Binance

## Overview

### Available Operations

* [getTicks](#getticks) - Get Binance Ticks
* [getCandlesticks](#getcandlesticks) - Get Binance Candles

## getTicks

Fetch raw book ticker data at microsecond granularity.

Returns bid/ask/mid/spread for each tick. Use cursor-based pagination
to iterate through large time ranges (e.g. a 15m window is ~63K ticks).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="binanceGetTicks" method="get" path="/v2/binance/ticks/{symbol}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.binance.getTicks({
    symbol: "SOLUSDT",
    startTime: 729523,
    endTime: 848939,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { binanceGetTicks } from "@predexon/sdk/funcs/binance-get-ticks.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await binanceGetTicks(predexon, {
    symbol: "SOLUSDT",
    startTime: 729523,
    endTime: 848939,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("binanceGetTicks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BinanceGetTicksRequest](../../models/operations/binance-get-ticks-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.BinanceTicksResponse](../../models/data/binance-ticks-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400                         | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getCandlesticks

Fetch OHLCV candlestick data for a Binance trading pair.

Candle prices are derived from book ticker mid-prices (not trade prices).

**Backtesting crypto up/down markets:**
- Use `interval=15m` for 15-minute prediction markets
- Use `interval=1h` for 1-hour prediction markets
- Use `interval=4h` and `interval=1d` for longer timeframes

### Example Usage

<!-- UsageSnippet language="typescript" operationID="binanceGetCandlesticks" method="get" path="/v2/binance/candles/{symbol}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.binance.getCandlesticks({
    symbol: "BTCUSDT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { binanceGetCandlesticks } from "@predexon/sdk/funcs/binance-get-candlesticks.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await binanceGetCandlesticks(predexon, {
    symbol: "BTCUSDT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("binanceGetCandlesticks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BinanceGetCandlesticksRequest](../../models/operations/binance-get-candlesticks-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[data.BinanceCandlesResponse](../../models/data/binance-candles-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.DataErrorResponse    | 400, 404                    | application/json            |
| data.HTTPValidationError    | 422                         | application/json            |
| errors.DataErrorResponse    | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |