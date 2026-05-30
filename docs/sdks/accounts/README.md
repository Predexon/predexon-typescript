# Accounts

## Overview

### Available Operations

* [create](#create) - Create Account
* [list](#list) - List Accounts
* [get](#get) - Get Account
* [delete](#delete) - Delete Account
* [enableVenue](#enablevenue) - Enable Venue
* [getBalance](#getbalance) - Get Balance
* [listPositions](#listpositions) - Get Positions
* [redeem](#redeem) - Redeem Position

## create

Create a new account. No venues are provisioned automatically — call `POST /api/accounts/{accountId}/enable` for each venue the account should trade on.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_account" method="post" path="/api/accounts/create" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.create();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { accountsCreate } from "@predexon/sdk/funcs/accounts-create.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsCreate(predexon);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.Account](../../models/trading/account.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 409                    | application/json            |
| trading.ApiError            | 500                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## list

List all accounts owned by the calling API key.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_accounts" method="get" path="/api/accounts" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { accountsList } from "@predexon/sdk/funcs/accounts-list.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsList(predexon);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListAccountsResponse](../../models/operations/list-accounts-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401                         | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## get

Fetch an account's profile and per-venue entitlements.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_account" method="get" path="/api/accounts/{accountId}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.get({
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
import { accountsGet } from "@predexon/sdk/funcs/accounts-get.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsGet(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountRequest](../../models/operations/get-account-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.Account](../../models/trading/account.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## delete

Delete an account. Cleanup runs across every venue the account had enabled.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_account" method="delete" path="/api/accounts/{accountId}" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  await predexon.accounts.delete({
    accountId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PredexonCore } from "@predexon/sdk/core.js";
import { accountsDelete } from "@predexon/sdk/funcs/accounts-delete.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsDelete(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("accountsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAccountRequest](../../models/operations/delete-account-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## enableVenue

Provision a venue for an account. Creates the wallet, funds gas, and sets token approvals. Returns `provisioning` while setup runs; poll `GET /api/accounts/{accountId}` until the venue's status becomes `active`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="enable_venue" method="post" path="/api/accounts/{accountId}/enable" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.enableVenue({
    accountId: "<id>",
    body: {
      venue: "polymarket",
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
import { accountsEnableVenue } from "@predexon/sdk/funcs/accounts-enable-venue.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsEnableVenue(predexon, {
    accountId: "<id>",
    body: {
      venue: "polymarket",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsEnableVenue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnableVenueRequest](../../models/operations/enable-venue-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.EnableVenueResponse](../../models/trading/enable-venue-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## getBalance

Fetch trading balances across all enabled venues, or filter by a single venue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_balance_account" method="get" path="/api/accounts/{accountId}/balance" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.getBalance({
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
import { accountsGetBalance } from "@predexon/sdk/funcs/accounts-get-balance.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsGetBalance(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsGetBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBalanceAccountRequest](../../models/operations/get-balance-account-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.BalanceResponse](../../models/trading/balance-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## listPositions

Fetch current positions across all enabled venues, or filter by a single venue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_positions_account" method="get" path="/api/accounts/{accountId}/positions" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.listPositions({
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
import { accountsListPositions } from "@predexon/sdk/funcs/accounts-list-positions.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsListPositions(predexon, {
    accountId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsListPositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPositionsAccountRequest](../../models/operations/get-positions-account-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetPositionsAccountResponse](../../models/operations/get-positions-account-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 401, 403, 404               | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |

## redeem

Redeem a resolved position. For Polymarket, Predict, and Limitless, identify the position via `market.tokenId`. For Opinion, use `market.marketId` — Opinion redeems every outcome of a market in one call.

### Example Usage: hyperliquid

<!-- UsageSnippet language="typescript" operationID="redeem_position_account" method="post" path="/api/accounts/{accountId}/redeem" example="hyperliquid" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.redeem({
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      market: {
        assetId: "100000020",
      },
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
import { accountsRedeem } from "@predexon/sdk/funcs/accounts-redeem.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsRedeem(predexon, {
    accountId: "<id>",
    body: {
      venue: "hyperliquid",
      market: {
        assetId: "100000020",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsRedeem failed:", res.error);
  }
}

run();
```
### Example Usage: limitless

<!-- UsageSnippet language="typescript" operationID="redeem_position_account" method="post" path="/api/accounts/{accountId}/redeem" example="limitless" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.redeem({
    accountId: "<id>",
    body: {
      venue: "limitless",
      market: {
        tokenId: "55222001234567",
      },
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
import { accountsRedeem } from "@predexon/sdk/funcs/accounts-redeem.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsRedeem(predexon, {
    accountId: "<id>",
    body: {
      venue: "limitless",
      market: {
        tokenId: "55222001234567",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsRedeem failed:", res.error);
  }
}

run();
```
### Example Usage: opinion_whole_market

<!-- UsageSnippet language="typescript" operationID="redeem_position_account" method="post" path="/api/accounts/{accountId}/redeem" example="opinion_whole_market" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.redeem({
    accountId: "<id>",
    body: {
      venue: "opinion",
      market: {
        marketId: "123",
      },
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
import { accountsRedeem } from "@predexon/sdk/funcs/accounts-redeem.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsRedeem(predexon, {
    accountId: "<id>",
    body: {
      venue: "opinion",
      market: {
        marketId: "123",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsRedeem failed:", res.error);
  }
}

run();
```
### Example Usage: polymarket

<!-- UsageSnippet language="typescript" operationID="redeem_position_account" method="post" path="/api/accounts/{accountId}/redeem" example="polymarket" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.redeem({
    accountId: "<id>",
    body: {
      venue: "polymarket",
      market: {
        tokenId: "71321045679252212",
      },
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
import { accountsRedeem } from "@predexon/sdk/funcs/accounts-redeem.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsRedeem(predexon, {
    accountId: "<id>",
    body: {
      venue: "polymarket",
      market: {
        tokenId: "71321045679252212",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsRedeem failed:", res.error);
  }
}

run();
```
### Example Usage: predict

<!-- UsageSnippet language="typescript" operationID="redeem_position_account" method="post" path="/api/accounts/{accountId}/redeem" example="predict" -->
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.accounts.redeem({
    accountId: "<id>",
    body: {
      venue: "predict",
      market: {
        tokenId: "103210916722172747942846166716572235061234589599991001208035034049741504775450",
      },
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
import { accountsRedeem } from "@predexon/sdk/funcs/accounts-redeem.js";

// Use `PredexonCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const predexon = new PredexonCore({
  security: {
    tradingApiKey: process.env["PREDEXON_TRADING_API_KEY"] ?? "",
  },
});

async function run() {
  const res = await accountsRedeem(predexon, {
    accountId: "<id>",
    body: {
      venue: "predict",
      market: {
        tokenId: "103210916722172747942846166716572235061234589599991001208035034049741504775450",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsRedeem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RedeemPositionAccountRequest](../../models/operations/redeem-position-account-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[trading.AccountRedeemResponse](../../models/trading/account-redeem-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| trading.ApiError            | 400, 401, 403, 404          | application/json            |
| errors.PredexonDefaultError | 4XX, 5XX                    | \*/\*                       |