# Orders

## Overview

### Available Operations

* [place](#place) - Place Order
* [list](#list) - Get Orders
* [cancelAll](#cancelall) - Cancel All Orders
* [get](#get) - Get Order
* [cancel](#cancel) - Cancel Order

## place

Place a buy or sell order. Identify the market with a `market` bag — required fields differ by venue (see the Place Order guide for the per-venue matrix).

### Example Usage: hyperliquid_limit_sell

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="hyperliquid_limit_sell" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      market: {
        assetId: "100000020",
      },
      side: "sell",
      type: "limit",
      size: "11",
      price: "0.99",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      market: {
        assetId: "100000020",
      },
      side: "sell",
      type: "limit",
      size: "11",
      price: "0.99",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: hyperliquid_market_buy

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="hyperliquid_market_buy" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      market: {
        assetId: "100000020",
      },
      side: "buy",
      type: "market",
      size: "11",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      market: {
        assetId: "100000020",
      },
      side: "buy",
      type: "market",
      size: "11",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: limitless_limit_buy

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="limitless_limit_buy" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "limitless",
      market: {
        tokenId: "55222001234567",
        marketSlug: "btc-up-or-down-1-hour-1778011201918",
      },
      side: "buy",
      type: "limit",
      size: "10",
      price: "0.420",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "limitless",
      market: {
        tokenId: "55222001234567",
        marketSlug: "btc-up-or-down-1-hour-1778011201918",
      },
      side: "buy",
      type: "limit",
      size: "10",
      price: "0.420",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: limitless_placed

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="limitless_placed" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "opinion",
      side: "buy",
      type: "market",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "opinion",
      side: "buy",
      type: "market",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: opinion_market_buy

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="opinion_market_buy" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "opinion",
      market: {
        tokenId: "9123",
        marketId: "123",
      },
      side: "buy",
      type: "market",
      amount: "5",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "opinion",
      market: {
        tokenId: "9123",
        marketId: "123",
      },
      side: "buy",
      type: "market",
      amount: "5",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: opinion_placed

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="opinion_placed" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "opinion",
      side: "buy",
      type: "market",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "opinion",
      side: "buy",
      type: "market",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: polymarket_filled

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="polymarket_filled" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "opinion",
      side: "buy",
      type: "market",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "opinion",
      side: "buy",
      type: "market",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: polymarket_limit_buy

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="polymarket_limit_buy" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "polymarket",
      market: {
        tokenId: "71321045679252212",
      },
      side: "buy",
      type: "limit",
      size: "10",
      price: "0.55",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "polymarket",
      market: {
        tokenId: "71321045679252212",
      },
      side: "buy",
      type: "limit",
      size: "10",
      price: "0.55",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: polymarket_market_buy

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="polymarket_market_buy" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "polymarket",
      market: {
        tokenId: "71321045679252212",
      },
      side: "buy",
      type: "market",
      amount: "2",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "polymarket",
      market: {
        tokenId: "71321045679252212",
      },
      side: "buy",
      type: "market",
      amount: "2",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```
### Example Usage: predict_limit_sell

<!-- UsageSnippet language="typescript" operationID="place_order_account" method="post" path="/api/accounts/{accountId}/orders" example="predict_limit_sell" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.place({
    accountId: "<id>",
    body: {
      venue: "predict",
      market: {
        tokenId: "103210916722172747942846166716572235061234589599991001208035034049741504775450",
        marketId: "46954",
      },
      side: "sell",
      type: "limit",
      size: "5",
      price: "0.40",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersPlace } from "@predexon/sdk/funcs/orders-place.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersPlace(predexon, {
    accountId: "<id>",
    body: {
      venue: "predict",
      market: {
        tokenId: "103210916722172747942846166716572235061234589599991001208035034049741504775450",
        marketId: "46954",
      },
      side: "sell",
      type: "limit",
      size: "5",
      price: "0.40",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPlace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PlaceOrderAccountRequest](../../models/operations/place-order-account-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.AccountOrderResponse](../../models/trading/account-order-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## list

Fetch open orders across all enabled venues, or filter by a single venue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_orders_account" method="get" path="/api/accounts/{accountId}/orders" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.list({
    accountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersList } from "@predexon/sdk/funcs/orders-list.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersList(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrdersAccountRequest](../../models/operations/get-orders-account-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetOrdersAccountResponse](../../models/operations/get-orders-account-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## cancelAll

Cancel all open orders, optionally scoped to a venue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel_all_orders_account" method="delete" path="/api/accounts/{accountId}/orders" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.cancelAll({
    accountId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersCancelAll } from "@predexon/sdk/funcs/orders-cancel-all.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersCancelAll(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancelAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelAllOrdersAccountRequest](../../models/operations/cancel-all-orders-account-request.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.CancelAllResponse](../../models/trading/cancel-all-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## get

Fetch a specific order by ID. `venue` must match the venue the order was placed on.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_order_account" method="get" path="/api/accounts/{accountId}/orders/{orderId}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.orders.get({
    accountId: "<id>",
    orderId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersGet } from "@predexon/sdk/funcs/orders-get.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersGet(predexon, {
    accountId: "<id>",
    orderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrderAccountRequest](../../models/operations/get-order-account-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.AccountOrderResponse](../../models/trading/account-order-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## cancel

Cancel a specific open order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancel_order_account" method="delete" path="/api/accounts/{accountId}/orders/{orderId}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  await predexon.orders.cancel({
    accountId: "<id>",
    orderId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { ordersCancel } from "@predexon/sdk/funcs/orders-cancel.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await ordersCancel(predexon, {
    accountId: "<id>",
    orderId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelOrderAccountRequest](../../models/operations/cancel-order-account-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| trading.ApiError            | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |