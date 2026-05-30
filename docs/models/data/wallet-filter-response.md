# WalletFilterResponse

Response for wallet filter by markets endpoint.

## Example Usage

```typescript
import { WalletFilterResponse } from "@predexon/sdk/models/data";

let value: WalletFilterResponse = {
  markets: [
    "<value 1>",
    "<value 2>",
  ],
  marketLogic: "and",
  window: "all_time",
  sortBy: "roi",
  entries: [
    {
      rank: 639518,
      user: "Cade_Moore13",
      metrics: {
        realizedPnl: 4261.63,
        volume: 3915.14,
        roi: 1053.76,
        trades: 743095,
        wins: 815433,
        losses: 511234,
        winRate: 6533.35,
        profitFactor: 2787.36,
        positionsClosed: 496297,
      },
      marketsMatched: 476156,
    },
  ],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `markets`                                                            | *string*[]                                                           | :heavy_check_mark:                                                   | Market condition IDs used in filter                                  |
| `marketLogic`                                                        | [data.MarketFilterLogic](../../models/data/market-filter-logic.md)   | :heavy_check_mark:                                                   | Logic for combining market filters.                                  |
| `window`                                                             | [data.TimeWindow](../../models/data/time-window.md)                  | :heavy_check_mark:                                                   | Time window for rolling metrics.                                     |
| `sortBy`                                                             | [data.LeaderboardSortBy](../../models/data/leaderboard-sort-by.md)   | :heavy_check_mark:                                                   | Sort options for leaderboard.                                        |
| `entries`                                                            | [data.WalletFilterEntry](../../models/data/wallet-filter-entry.md)[] | :heavy_check_mark:                                                   | Matching wallets                                                     |
| `pagination`                                                         | [data.CursorPagination](../../models/data/cursor-pagination.md)      | :heavy_check_mark:                                                   | Cursor-based pagination for endpoints that don't support offset.     |