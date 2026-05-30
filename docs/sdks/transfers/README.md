# Transfers

## Overview

### Available Operations

* [getDepositWallet](#getdepositwallet) - Get Deposit Info
* [withdrawDirect](#withdrawdirect) - Withdraw Funds
* [create](#create) - Create Transfer
* [list](#list) - List Transfers
* [get](#get) - Get Transfer
* [quote](#quote) - Quote Transfer

## getDepositWallet

Fetch the account's deposit wallet — a Base USDC address that funds every venue except Hyperliquid. Send USDC here, then use Create Transfer with `from: "deposit"` and `to: "<venue>"` to fund a specific venue, or call Quote Transfer with `from: "external"` to bridge USDC in from another chain.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_deposit_info_account" method="get" path="/api/accounts/{accountId}/deposit-info" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.getDepositWallet({
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
import { transfersGetDepositWallet } from "@predexon/sdk/funcs/transfers-get-deposit-wallet.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersGetDepositWallet(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGetDepositWallet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDepositInfoAccountRequest](../../models/operations/get-deposit-info-account-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.DepositInfo](../../models/trading/deposit-info.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404, 409          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## withdrawDirect

Withdraw funds from an enabled venue wallet to an external address.

### Example Usage: hyperliquid

<!-- UsageSnippet language="typescript" operationID="withdraw_funds_account" method="post" path="/api/accounts/{accountId}/withdraw" example="hyperliquid" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.withdrawDirect({
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      amount: "20.00",
      destinationAddress: "0x1234567890abcdef1234567890abcdef12345678",
      chain: "arbitrum",
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
import { transfersWithdrawDirect } from "@predexon/sdk/funcs/transfers-withdraw-direct.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersWithdrawDirect(predexon, {
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      amount: "20.00",
      destinationAddress: "0x1234567890abcdef1234567890abcdef12345678",
      chain: "arbitrum",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersWithdrawDirect failed:", res.error);
  }
}

run();
```
### Example Usage: limitless

<!-- UsageSnippet language="typescript" operationID="withdraw_funds_account" method="post" path="/api/accounts/{accountId}/withdraw" example="limitless" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.withdrawDirect({
    accountId: "<id>",
    body: {
      venue: "limitless",
      amount: "50.00",
      destinationAddress: "0x9876543210abcdef9876543210abcdef98765432",
      chain: "base",
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
import { transfersWithdrawDirect } from "@predexon/sdk/funcs/transfers-withdraw-direct.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersWithdrawDirect(predexon, {
    accountId: "<id>",
    body: {
      venue: "limitless",
      amount: "50.00",
      destinationAddress: "0x9876543210abcdef9876543210abcdef98765432",
      chain: "base",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersWithdrawDirect failed:", res.error);
  }
}

run();
```
### Example Usage: opinion

<!-- UsageSnippet language="typescript" operationID="withdraw_funds_account" method="post" path="/api/accounts/{accountId}/withdraw" example="opinion" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.withdrawDirect({
    accountId: "<id>",
    body: {
      venue: "opinion",
      amount: "25.00",
      destinationAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      chain: "bsc",
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
import { transfersWithdrawDirect } from "@predexon/sdk/funcs/transfers-withdraw-direct.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersWithdrawDirect(predexon, {
    accountId: "<id>",
    body: {
      venue: "opinion",
      amount: "25.00",
      destinationAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      chain: "bsc",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersWithdrawDirect failed:", res.error);
  }
}

run();
```
### Example Usage: polymarket

<!-- UsageSnippet language="typescript" operationID="withdraw_funds_account" method="post" path="/api/accounts/{accountId}/withdraw" example="polymarket" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.withdrawDirect({
    accountId: "<id>",
    body: {
      venue: "polymarket",
      amount: "100.00",
      destinationAddress: "0x9876543210abcdef9876543210abcdef98765432",
      chain: "polygon",
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
import { transfersWithdrawDirect } from "@predexon/sdk/funcs/transfers-withdraw-direct.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersWithdrawDirect(predexon, {
    accountId: "<id>",
    body: {
      venue: "polymarket",
      amount: "100.00",
      destinationAddress: "0x9876543210abcdef9876543210abcdef98765432",
      chain: "polygon",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersWithdrawDirect failed:", res.error);
  }
}

run();
```
### Example Usage: predict

<!-- UsageSnippet language="typescript" operationID="withdraw_funds_account" method="post" path="/api/accounts/{accountId}/withdraw" example="predict" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.withdrawDirect({
    accountId: "<id>",
    body: {
      venue: "predict",
      amount: "25.00",
      destinationAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      chain: "bsc",
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
import { transfersWithdrawDirect } from "@predexon/sdk/funcs/transfers-withdraw-direct.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersWithdrawDirect(predexon, {
    accountId: "<id>",
    body: {
      venue: "predict",
      amount: "25.00",
      destinationAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      chain: "bsc",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersWithdrawDirect failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.WithdrawFundsAccountRequest](../../models/operations/withdraw-funds-account-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.WithdrawResponse](../../models/trading/withdraw-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| trading.ApiError            | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## create

Move funds between the deposit wallet, a venue trading wallet, or an external address. One verb for every fund-movement direction; see the Transfers guide for the route matrix.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_transfer" method="post" path="/api/accounts/{accountId}/transfers" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.create({
    accountId: "<id>",
    body: {
      from: "polymarket",
      to: "polymarket",
      amount: "364.01",
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
import { transfersCreate } from "@predexon/sdk/funcs/transfers-create.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersCreate(predexon, {
    accountId: "<id>",
    body: {
      from: "polymarket",
      to: "polymarket",
      amount: "364.01",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferRequest](../../models/operations/create-transfer-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.Transfer](../../models/trading/transfer.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## list

Paginated list of the account's transfers, most-recent first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_transfers" method="get" path="/api/accounts/{accountId}/transfers" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.list({
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
import { transfersList } from "@predexon/sdk/funcs/transfers-list.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersList(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransfersRequest](../../models/operations/list-transfers-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.TransfersList](../../models/trading/transfers-list.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403                    | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## get

Fetch a single transfer by ID. Lazy-refreshes pending rows from the bridge provider so the response always reflects the latest state.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transfer" method="get" path="/api/accounts/{accountId}/transfers/{transferId}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.get({
    accountId: "<id>",
    transferId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { transfersGet } from "@predexon/sdk/funcs/transfers-get.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(predexon, {
    accountId: "<id>",
    transferId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferRequest](../../models/operations/get-transfer-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.Transfer](../../models/trading/transfer.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## quote

Preview the cost and timing of a transfer before executing. For outbound (`from: "deposit"`) and internal (`from: <venue>`) transfers, accepts the same body as `POST /transfers`. For inbound (`from: "external"`), accepts a `source` object describing the partner's external wallet — the response includes a signed `transactionRequest` the partner submits from their own wallet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="quote_transfer" method="post" path="/api/accounts/{accountId}/transfers/quote" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.transfers.quote({
    accountId: "<id>",
    body: {
      from: "polymarket",
      to: "deposit",
      amount: "205.86",
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
import { transfersQuote } from "@predexon/sdk/funcs/transfers-quote.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersQuote(predexon, {
    accountId: "<id>",
    body: {
      from: "polymarket",
      to: "deposit",
      amount: "205.86",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersQuote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QuoteTransferRequest](../../models/operations/quote-transfer-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.TransferQuoteResponse](../../models/trading/transfer-quote-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |