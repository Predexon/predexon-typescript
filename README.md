# @predexon/sdk

Unified, type-safe TypeScript SDK for the [Predexon](https://predexon.com) prediction-market APIs — market data and trading in one client.

[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)

<!-- Start Summary [summary] -->
## Summary

Predexon API: Unified, type-safe TypeScript SDK for the [Predexon](https://predexon.com) prediction-market APIs — market data and trading in one client.

**Coverage**
- **Data API** (`api.predexon.com`): markets, prices, candlesticks, orderbook history, trades, wallet analytics, smart-money & leaderboards across **Polymarket, Kalshi, Limitless, Opinion, Predict.Fun, Dflow, and Binance**, plus cross-venue search.
- **Trading API** (`trade.predexon.com`): managed accounts, order placement & management, balances, positions, fund transfers/bridging, and cross-venue order routing.

**Two API keys**
The data and trading planes are authenticated separately. Provide both via the SDK config or environment variables — the SDK automatically routes each call to the correct host:

```ts
const predexon = new Predexon({
  security: {
    dataApiKey: process.env.PREDEXON_DATA_API_KEY,        // → api.predexon.com
    tradingApiKey: process.env.PREDEXON_TRADING_API_KEY,  // → trade.predexon.com
  },
});
```

**Errors** are unified across both planes — every error exposes `.error`, `.message`, and `.statusCode`.

**Funding note**: inbound deposits from non-Base chains return a transaction for the end user to sign; Hyperliquid uses a separate funding path. See the [funding guide](https://docs.predexon.com/trading-api/guides/funding-and-withdrawals).

Full docs: https://docs.predexon.com
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@predexon/sdk](#predexonsdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @predexon/sdk
```

### PNPM

```bash
pnpm add @predexon/sdk
```

### Bun

```bash
bun add @predexon/sdk
```

### Yarn

```bash
yarn add @predexon/sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.search.markets({
    q: "trump",
    venue: "polymarket,kalshi",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name            | Type   | Scheme  | Environment Variable       |
| --------------- | ------ | ------- | -------------------------- |
| `dataApiKey`    | apiKey | API key | `PREDEXON_DATA_API_KEY`    |
| `tradingApiKey` | apiKey | API key | `PREDEXON_TRADING_API_KEY` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.search.markets({
    q: "trump",
    venue: "polymarket,kalshi",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Accounts](docs/sdks/accounts/README.md)

* [create](docs/sdks/accounts/README.md#create) - Create Account
* [list](docs/sdks/accounts/README.md#list) - List Accounts
* [get](docs/sdks/accounts/README.md#get) - Get Account
* [delete](docs/sdks/accounts/README.md#delete) - Delete Account
* [enableVenue](docs/sdks/accounts/README.md#enablevenue) - Enable Venue
* [getBalance](docs/sdks/accounts/README.md#getbalance) - Get Balance
* [listPositions](docs/sdks/accounts/README.md#listpositions) - Get Positions
* [redeem](docs/sdks/accounts/README.md#redeem) - Redeem Position

### [Binance](docs/sdks/binance/README.md)

* [getTicks](docs/sdks/binance/README.md#getticks) - Get Binance Ticks
* [getCandlesticks](docs/sdks/binance/README.md#getcandlesticks) - Get Binance Candles

### [Dflow](docs/sdks/dflow/README.md)

* [getTrades](docs/sdks/dflow/README.md#gettrades) - Get Dflow Trades
* [getWalletPnL](docs/sdks/dflow/README.md#getwalletpnl) - Get Dflow Wallet Pnl
* [getWalletPositions](docs/sdks/dflow/README.md#getwalletpositions) - Get Dflow Wallet Positions

### [Kalshi](docs/sdks/kalshi/README.md)

* [listMarkets](docs/sdks/kalshi/README.md#listmarkets) - Get Kalshi Markets
* [getTrades](docs/sdks/kalshi/README.md#gettrades) - Get Kalshi Trades
* [getOrderbookHistory](docs/sdks/kalshi/README.md#getorderbookhistory) - Get Kalshi Orderbooks

### [Limitless](docs/sdks/limitless/README.md)

* [listMarkets](docs/sdks/limitless/README.md#listmarkets) - Get Limitless Markets
* [getOrderbookHistory](docs/sdks/limitless/README.md#getorderbookhistory) - Get Limitless Orderbooks

### [Opinion](docs/sdks/opinion/README.md)

* [listMarkets](docs/sdks/opinion/README.md#listmarkets) - Get Opinion Markets
* [getOrderbookHistory](docs/sdks/opinion/README.md#getorderbookhistory) - Get Opinion Orderbooks

### [Orders](docs/sdks/orders/README.md)

* [place](docs/sdks/orders/README.md#place) - Place Order
* [list](docs/sdks/orders/README.md#list) - Get Orders
* [cancelAll](docs/sdks/orders/README.md#cancelall) - Cancel All Orders
* [get](docs/sdks/orders/README.md#get) - Get Order
* [cancel](docs/sdks/orders/README.md#cancel) - Cancel Order

### [Polymarket](docs/sdks/polymarket/README.md)

* [getWalletPnL](docs/sdks/polymarket/README.md#getwalletpnl) - Get Wallet Pnl
* [getWalletPositions](docs/sdks/polymarket/README.md#getwalletpositions) - Get Wallet Positions
* [getWalletVolumeChart](docs/sdks/polymarket/README.md#getwalletvolumechart) - Get Wallet Volume Chart
* [getWalletIdentity](docs/sdks/polymarket/README.md#getwalletidentity) - Get Wallet Identity
* [getWalletIdentities](docs/sdks/polymarket/README.md#getwalletidentities) - Get Wallet Identities
* [getCandlesticks](docs/sdks/polymarket/README.md#getcandlesticks) - Get Candlesticks
* [getTokenPrice](docs/sdks/polymarket/README.md#gettokenprice) - Get Market Price
* [getActivity](docs/sdks/polymarket/README.md#getactivity) - Get Activity
* [listMarkets](docs/sdks/polymarket/README.md#listmarkets) - Get Markets
* [listMarketsKeyset](docs/sdks/polymarket/README.md#listmarketskeyset) - List Markets (Keyset Pagination)
* [getVolumeTimeSeries](docs/sdks/polymarket/README.md#getvolumetimeseries) - Get Market Volume Time Series
* [getOpenInterestTimeSeries](docs/sdks/polymarket/README.md#getopeninteresttimeseries) - Get Market Open Interest Time Series
* [getOrderbookHistory](docs/sdks/polymarket/README.md#getorderbookhistory) - Get Orderbooks
* [getTrades](docs/sdks/polymarket/README.md#gettrades) - Get Trades
* [getVolumeChart](docs/sdks/polymarket/README.md#getvolumechart) - Get Volume Chart
* [getWalletProfile](docs/sdks/polymarket/README.md#getwalletprofile) - Get Wallet Profile
* [getWalletProfiles](docs/sdks/polymarket/README.md#getwalletprofiles) - Get Wallet Profiles Batch
* [getLeaderboard](docs/sdks/polymarket/README.md#getleaderboard) - Get Leaderboard
* [getMarketLeaderboard](docs/sdks/polymarket/README.md#getmarketleaderboard) - Get Market Leaderboard
* [getMarketTopHolders](docs/sdks/polymarket/README.md#getmarkettopholders) - Get Market Top Holders
* [getWalletMarkets](docs/sdks/polymarket/README.md#getwalletmarkets) - Get Wallet Markets
* [filterWalletsByMarkets](docs/sdks/polymarket/README.md#filterwalletsbymarkets) - Filter Wallets By Markets
* [listSmartActivityMarkets](docs/sdks/polymarket/README.md#listsmartactivitymarkets) - Get Smart Activity Markets
* [getSmartMoneyPositioning](docs/sdks/polymarket/README.md#getsmartmoneypositioning) - Get Smart Money Positioning
* [getSimilarWallets](docs/sdks/polymarket/README.md#getsimilarwallets) - Get Similar Wallets
* [getCohortStats](docs/sdks/polymarket/README.md#getcohortstats) - Get Cohort Stats
* [listCryptoMarkets](docs/sdks/polymarket/README.md#listcryptomarkets) - Get Crypto Updown
* [listEvents](docs/sdks/polymarket/README.md#listevents) - Get Events
* [listEventsKeyset](docs/sdks/polymarket/README.md#listeventskeyset) - Get Events Keyset
* [listAllPositions](docs/sdks/polymarket/README.md#listallpositions) - Get All Positions
* [getUmaMarket](docs/sdks/polymarket/README.md#getumamarket) - Get Uma Market
* [listUmaMarkets](docs/sdks/polymarket/README.md#listumamarkets) - List Uma Markets
* [getCandlesticksByToken](docs/sdks/polymarket/README.md#getcandlesticksbytoken) - Get Candlesticks By Token
* [getConnectedWallets](docs/sdks/polymarket/README.md#getconnectedwallets) - Connected wallets for an address (graph-based)
* [getBuilderLeaderboard](docs/sdks/polymarket/README.md#getbuilderleaderboard) - Get Builder Leaderboard
* [getBuilderStats](docs/sdks/polymarket/README.md#getbuilderstats) - Get Builder Stats
* [getBuilderMarkets](docs/sdks/polymarket/README.md#getbuildermarkets) - Get Builder Markets
* [getBuilderTimeSeries](docs/sdks/polymarket/README.md#getbuildertimeseries) - Get Builder Timeseries

### [Predictfun](docs/sdks/predictfun/README.md)

* [listMarkets](docs/sdks/predictfun/README.md#listmarkets) - Get Predict Markets
* [getOrderbookHistory](docs/sdks/predictfun/README.md#getorderbookhistory) - Get Predictfun Orderbooks

### [Router](docs/sdks/router/README.md)

* [quote](docs/sdks/router/README.md#quote) - Get Router Quote
* [placeOrder](docs/sdks/router/README.md#placeorder) - Place Router Order
* [listOrders](docs/sdks/router/README.md#listorders) - List Router Orders
* [getOrder](docs/sdks/router/README.md#getorder) - Get Router Order
* [cancelOrder](docs/sdks/router/README.md#cancelorder) - Cancel Router Order

### [Search](docs/sdks/search/README.md)

* [markets](docs/sdks/search/README.md#markets) - Search Markets Across Venues

### [Transfers](docs/sdks/transfers/README.md)

* [getDepositWallet](docs/sdks/transfers/README.md#getdepositwallet) - Get Deposit Info
* [withdrawDirect](docs/sdks/transfers/README.md#withdrawdirect) - Withdraw Funds
* [create](docs/sdks/transfers/README.md#create) - Create Transfer
* [list](docs/sdks/transfers/README.md#list) - List Transfers
* [get](docs/sdks/transfers/README.md#get) - Get Transfer
* [quote](docs/sdks/transfers/README.md#quote) - Quote Transfer

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsCreate`](docs/sdks/accounts/README.md#create) - Create Account
- [`accountsDelete`](docs/sdks/accounts/README.md#delete) - Delete Account
- [`accountsEnableVenue`](docs/sdks/accounts/README.md#enablevenue) - Enable Venue
- [`accountsGet`](docs/sdks/accounts/README.md#get) - Get Account
- [`accountsGetBalance`](docs/sdks/accounts/README.md#getbalance) - Get Balance
- [`accountsList`](docs/sdks/accounts/README.md#list) - List Accounts
- [`accountsListPositions`](docs/sdks/accounts/README.md#listpositions) - Get Positions
- [`accountsRedeem`](docs/sdks/accounts/README.md#redeem) - Redeem Position
- [`binanceGetCandlesticks`](docs/sdks/binance/README.md#getcandlesticks) - Get Binance Candles
- [`binanceGetTicks`](docs/sdks/binance/README.md#getticks) - Get Binance Ticks
- [`dflowGetTrades`](docs/sdks/dflow/README.md#gettrades) - Get Dflow Trades
- [`dflowGetWalletPnL`](docs/sdks/dflow/README.md#getwalletpnl) - Get Dflow Wallet Pnl
- [`dflowGetWalletPositions`](docs/sdks/dflow/README.md#getwalletpositions) - Get Dflow Wallet Positions
- [`kalshiGetOrderbookHistory`](docs/sdks/kalshi/README.md#getorderbookhistory) - Get Kalshi Orderbooks
- [`kalshiGetTrades`](docs/sdks/kalshi/README.md#gettrades) - Get Kalshi Trades
- [`kalshiListMarkets`](docs/sdks/kalshi/README.md#listmarkets) - Get Kalshi Markets
- [`limitlessGetOrderbookHistory`](docs/sdks/limitless/README.md#getorderbookhistory) - Get Limitless Orderbooks
- [`limitlessListMarkets`](docs/sdks/limitless/README.md#listmarkets) - Get Limitless Markets
- [`opinionGetOrderbookHistory`](docs/sdks/opinion/README.md#getorderbookhistory) - Get Opinion Orderbooks
- [`opinionListMarkets`](docs/sdks/opinion/README.md#listmarkets) - Get Opinion Markets
- [`ordersCancel`](docs/sdks/orders/README.md#cancel) - Cancel Order
- [`ordersCancelAll`](docs/sdks/orders/README.md#cancelall) - Cancel All Orders
- [`ordersGet`](docs/sdks/orders/README.md#get) - Get Order
- [`ordersList`](docs/sdks/orders/README.md#list) - Get Orders
- [`ordersPlace`](docs/sdks/orders/README.md#place) - Place Order
- [`polymarketFilterWalletsByMarkets`](docs/sdks/polymarket/README.md#filterwalletsbymarkets) - Filter Wallets By Markets
- [`polymarketGetActivity`](docs/sdks/polymarket/README.md#getactivity) - Get Activity
- [`polymarketGetBuilderLeaderboard`](docs/sdks/polymarket/README.md#getbuilderleaderboard) - Get Builder Leaderboard
- [`polymarketGetBuilderMarkets`](docs/sdks/polymarket/README.md#getbuildermarkets) - Get Builder Markets
- [`polymarketGetBuilderStats`](docs/sdks/polymarket/README.md#getbuilderstats) - Get Builder Stats
- [`polymarketGetBuilderTimeSeries`](docs/sdks/polymarket/README.md#getbuildertimeseries) - Get Builder Timeseries
- [`polymarketGetCandlesticks`](docs/sdks/polymarket/README.md#getcandlesticks) - Get Candlesticks
- [`polymarketGetCandlesticksByToken`](docs/sdks/polymarket/README.md#getcandlesticksbytoken) - Get Candlesticks By Token
- [`polymarketGetCohortStats`](docs/sdks/polymarket/README.md#getcohortstats) - Get Cohort Stats
- [`polymarketGetConnectedWallets`](docs/sdks/polymarket/README.md#getconnectedwallets) - Connected wallets for an address (graph-based)
- [`polymarketGetLeaderboard`](docs/sdks/polymarket/README.md#getleaderboard) - Get Leaderboard
- [`polymarketGetMarketLeaderboard`](docs/sdks/polymarket/README.md#getmarketleaderboard) - Get Market Leaderboard
- [`polymarketGetMarketTopHolders`](docs/sdks/polymarket/README.md#getmarkettopholders) - Get Market Top Holders
- [`polymarketGetOpenInterestTimeSeries`](docs/sdks/polymarket/README.md#getopeninteresttimeseries) - Get Market Open Interest Time Series
- [`polymarketGetOrderbookHistory`](docs/sdks/polymarket/README.md#getorderbookhistory) - Get Orderbooks
- [`polymarketGetSimilarWallets`](docs/sdks/polymarket/README.md#getsimilarwallets) - Get Similar Wallets
- [`polymarketGetSmartMoneyPositioning`](docs/sdks/polymarket/README.md#getsmartmoneypositioning) - Get Smart Money Positioning
- [`polymarketGetTokenPrice`](docs/sdks/polymarket/README.md#gettokenprice) - Get Market Price
- [`polymarketGetTrades`](docs/sdks/polymarket/README.md#gettrades) - Get Trades
- [`polymarketGetUmaMarket`](docs/sdks/polymarket/README.md#getumamarket) - Get Uma Market
- [`polymarketGetVolumeChart`](docs/sdks/polymarket/README.md#getvolumechart) - Get Volume Chart
- [`polymarketGetVolumeTimeSeries`](docs/sdks/polymarket/README.md#getvolumetimeseries) - Get Market Volume Time Series
- [`polymarketGetWalletIdentities`](docs/sdks/polymarket/README.md#getwalletidentities) - Get Wallet Identities
- [`polymarketGetWalletIdentity`](docs/sdks/polymarket/README.md#getwalletidentity) - Get Wallet Identity
- [`polymarketGetWalletMarkets`](docs/sdks/polymarket/README.md#getwalletmarkets) - Get Wallet Markets
- [`polymarketGetWalletPnL`](docs/sdks/polymarket/README.md#getwalletpnl) - Get Wallet Pnl
- [`polymarketGetWalletPositions`](docs/sdks/polymarket/README.md#getwalletpositions) - Get Wallet Positions
- [`polymarketGetWalletProfile`](docs/sdks/polymarket/README.md#getwalletprofile) - Get Wallet Profile
- [`polymarketGetWalletProfiles`](docs/sdks/polymarket/README.md#getwalletprofiles) - Get Wallet Profiles Batch
- [`polymarketGetWalletVolumeChart`](docs/sdks/polymarket/README.md#getwalletvolumechart) - Get Wallet Volume Chart
- [`polymarketListAllPositions`](docs/sdks/polymarket/README.md#listallpositions) - Get All Positions
- [`polymarketListCryptoMarkets`](docs/sdks/polymarket/README.md#listcryptomarkets) - Get Crypto Updown
- [`polymarketListEvents`](docs/sdks/polymarket/README.md#listevents) - Get Events
- [`polymarketListEventsKeyset`](docs/sdks/polymarket/README.md#listeventskeyset) - Get Events Keyset
- [`polymarketListMarkets`](docs/sdks/polymarket/README.md#listmarkets) - Get Markets
- [`polymarketListMarketsKeyset`](docs/sdks/polymarket/README.md#listmarketskeyset) - List Markets (Keyset Pagination)
- [`polymarketListSmartActivityMarkets`](docs/sdks/polymarket/README.md#listsmartactivitymarkets) - Get Smart Activity Markets
- [`polymarketListUmaMarkets`](docs/sdks/polymarket/README.md#listumamarkets) - List Uma Markets
- [`predictfunGetOrderbookHistory`](docs/sdks/predictfun/README.md#getorderbookhistory) - Get Predictfun Orderbooks
- [`predictfunListMarkets`](docs/sdks/predictfun/README.md#listmarkets) - Get Predict Markets
- [`routerCancelOrder`](docs/sdks/router/README.md#cancelorder) - Cancel Router Order
- [`routerGetOrder`](docs/sdks/router/README.md#getorder) - Get Router Order
- [`routerListOrders`](docs/sdks/router/README.md#listorders) - List Router Orders
- [`routerPlaceOrder`](docs/sdks/router/README.md#placeorder) - Place Router Order
- [`routerQuote`](docs/sdks/router/README.md#quote) - Get Router Quote
- [`searchMarkets`](docs/sdks/search/README.md#markets) - Search Markets Across Venues
- [`transfersCreate`](docs/sdks/transfers/README.md#create) - Create Transfer
- [`transfersGet`](docs/sdks/transfers/README.md#get) - Get Transfer
- [`transfersGetDepositWallet`](docs/sdks/transfers/README.md#getdepositwallet) - Get Deposit Info
- [`transfersList`](docs/sdks/transfers/README.md#list) - List Transfers
- [`transfersQuote`](docs/sdks/transfers/README.md#quote) - Quote Transfer
- [`transfersWithdrawDirect`](docs/sdks/transfers/README.md#withdrawdirect) - Withdraw Funds

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.search.markets({
    q: "trump",
    venue: "polymarket,kalshi",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  const result = await predexon.search.markets({
    q: "trump",
    venue: "polymarket,kalshi",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`PredexonError`](./src/models/errors/predexon-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Predexon } from "@predexon/sdk";
import * as errors from "@predexon/sdk/models/errors";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function run() {
  try {
    const result = await predexon.search.markets({
      q: "trump",
      venue: "polymarket,kalshi",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.PredexonError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.DataErrorResponse) {
        console.log(error.data$.detail); // models.Detail
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`PredexonError`](./src/models/errors/predexon-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (9)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`PredexonError`](./src/models/errors/predexon-error.ts)**:
* [`HTTPValidationError`](./src/models/data/http-validation-error.ts): Status code `422`. Applicable to 53 of 77 methods.*
* [`DataErrorResponse`](./src/models/errors/data-error-response.ts): Applicable to 44 of 77 methods.*
* [`ApiError`](./src/models/trading/api-error.ts): Unified error envelope returned by every endpoint on any 4xx or 5xx response. The `error` field is a stable snake_case code partners can branch on; `message` is the human-readable explanation (free-form, may change); `requestId` is the request correlation id (also returned in the `x-request-id` response header) — quote it when contacting support. Applicable to 24 of 77 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Predexon } from "@predexon/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@predexon/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Predexon({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Sensitive headers (e.g. `x-api-key`, `authorization`) are redacted in debug logs. Request and response bodies are logged in full, so enable debug logging only during local development, not in production.

```typescript
import { Predexon } from "@predexon/sdk";

const sdk = new Predexon({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PREDEXON_DEBUG` to true.
<!-- End Debugging [debug] -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 
