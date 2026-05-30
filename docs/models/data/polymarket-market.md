# PolymarketMarket

Polymarket market in list response.

## Example Usage

```typescript
import { PolymarketMarket } from "@predexon/sdk/models/data";

let value: PolymarketMarket = {
  conditionId: "<id>",
  marketId: "<id>",
  marketSlug: "<value>",
  title: "<value>",
  status: "<value>",
  outcomes: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `conditionId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `questionId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `marketId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `marketSlug`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `winningSide`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `startTime`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | ISO 8601 timestamp                                                       |
| `endTime`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | ISO 8601 timestamp                                                       |
| `closeTime`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | ISO 8601 timestamp                                                       |
| `createdTime`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | ISO 8601 timestamp                                                       |
| `imageUrl`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `eventId`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `eventSlug`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `eventTitle`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `outcomes`                                                               | [data.PolymarketOutcome](../../models/data/polymarket-outcome.md)[]      | :heavy_check_mark:                                                       | N/A                                                                      |
| `totalVolumeUsd`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `liquidityUsd`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tags`                                                                   | *string*[]                                                               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `isNegRisk`                                                              | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `rollingMetrics`                                                         | [data.MarketRollingMetrics](../../models/data/market-rolling-metrics.md) | :heavy_minus_sign:                                                       | Rolling window metrics (1D/7D/30D) from hourly cron refresh              |