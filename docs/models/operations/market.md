# Market

## Example Usage

```typescript
import { Market } from "@predexon/sdk/models/operations";

let value: Market = {
  venue: "<value>",
  title: "<value>",
  status: "closed",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `venue`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Venue identifier: polymarket, kalshi, limitless, opinion, or predict                          |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.MarketStatus](../../models/operations/market-status.md)                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Current YES price (0-1)                                                                       |
| `volume`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Total volume in USD                                                                           |
| `marketSlug`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Polymarket/Limitless/Predict slug (venue-dependent)                                           |
| `marketId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Kalshi/Opinion market ID (venue-dependent)                                                    |
| `conditionId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Polymarket condition ID (Polymarket only)                                                     |
| `predexonId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Stable Predexon-native identifier (`px-<hash>`)                                               |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Market close timestamp (ISO 8601); omitted if venue has no end time                           |