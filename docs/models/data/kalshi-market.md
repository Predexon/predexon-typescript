# KalshiMarket

Kalshi market in list response.

## Example Usage

```typescript
import { KalshiMarket } from "@predexon/sdk/models/data";

let value: KalshiMarket = {
  ticker: "<value>",
  eventTicker: "<value>",
  title: "<value>",
  status: "<value>",
  outcomes: [
    {
      label: "<value>",
    },
  ],
  event: {
    eventTicker: "<value>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `ticker`                                                    | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `eventTicker`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `marketId`                                                  | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `title`                                                     | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `yesSubtitle`                                               | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `noSubtitle`                                                | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `status`                                                    | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `result`                                                    | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `openTime`                                                  | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |
| `closeTime`                                                 | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |
| `expectedExpirationTime`                                    | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |
| `settlementTime`                                            | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |
| `determinationTime`                                         | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |
| `canCloseEarly`                                             | *boolean*                                                   | :heavy_minus_sign:                                          | N/A                                                         |
| `strikeType`                                                | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `customStrike`                                              | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `outcomes`                                                  | [data.KalshiOutcome](../../models/data/kalshi-outcome.md)[] | :heavy_check_mark:                                          | N/A                                                         |
| `lastPrice`                                                 | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `volume`                                                    | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `openInterest`                                              | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `dollarVolume`                                              | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `dollarOpenInterest`                                        | *number*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `event`                                                     | [data.KalshiEvent](../../models/data/kalshi-event.md)       | :heavy_check_mark:                                          | Event info nested in Kalshi market.                         |
| `createdAt`                                                 | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |
| `updatedAt`                                                 | *string*                                                    | :heavy_minus_sign:                                          | ISO 8601 timestamp                                          |