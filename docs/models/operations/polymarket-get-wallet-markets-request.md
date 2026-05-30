# PolymarketGetWalletMarketsRequest

## Example Usage

```typescript
import { PolymarketGetWalletMarketsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetWalletMarketsRequest = {
  wallet: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `wallet`                                                           | *string*                                                           | :heavy_check_mark:                                                 | Wallet address                                                     |
| `window`                                                           | [data.TimeWindow](../../models/data/time-window.md)                | :heavy_minus_sign:                                                 | Time window                                                        |
| `sortBy`                                                           | [data.LeaderboardSortBy](../../models/data/leaderboard-sort-by.md) | :heavy_minus_sign:                                                 | Sort field                                                         |
| `order`                                                            | [data.OrderDirection](../../models/data/order-direction.md)        | :heavy_minus_sign:                                                 | Sort order                                                         |
| `minTrades`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Minimum trades per market                                          |
| `limit`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | Results per page                                                   |
| `paginationKey`                                                    | *string*                                                           | :heavy_minus_sign:                                                 | Cursor for pagination                                              |