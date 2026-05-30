# PolymarketGetMarketLeaderboardRequest

## Example Usage

```typescript
import { PolymarketGetMarketLeaderboardRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetMarketLeaderboardRequest = {
  conditionId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conditionId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | Market condition ID                                                |
| `window`                                                           | [data.TimeWindow](../../models/data/time-window.md)                | :heavy_minus_sign:                                                 | Time window                                                        |
| `sortBy`                                                           | [data.LeaderboardSortBy](../../models/data/leaderboard-sort-by.md) | :heavy_minus_sign:                                                 | Sort field                                                         |
| `order`                                                            | [data.OrderDirection](../../models/data/order-direction.md)        | :heavy_minus_sign:                                                 | Sort order                                                         |
| `minTotalPnl`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Minimum total PnL in this market (USD, net of fees)                |
| `maxTotalPnl`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Maximum total PnL in this market (USD, net of fees)                |
| `minTrades`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Minimum trades in this market                                      |
| `maxTrades`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Maximum trades in this market                                      |
| `minVolume`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Minimum volume in this market                                      |
| `maxVolume`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Maximum volume in this market                                      |
| `minAvgBuyPrice`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | Minimum avg buy price (0-1)                                        |
| `maxAvgBuyPrice`                                                   | *number*                                                           | :heavy_minus_sign:                                                 | Maximum avg buy price (0-1)                                        |
| `minAvgSellPrice`                                                  | *number*                                                           | :heavy_minus_sign:                                                 | Minimum avg sell price (0-1)                                       |
| `maxAvgSellPrice`                                                  | *number*                                                           | :heavy_minus_sign:                                                 | Maximum avg sell price (0-1)                                       |
| `minEntryEdge`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Minimum entry edge (avg_sell - avg_buy)                            |
| `maxEntryEdge`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Maximum entry edge (avg_sell - avg_buy)                            |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Results per page                                                   |
| `paginationKey`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | Cursor for pagination                                              |