# MarketLeaderboardResponse

Response for per-market leaderboard endpoint.

## Example Usage

```typescript
import { MarketLeaderboardResponse } from "@predexon/sdk/models/data";

let value: MarketLeaderboardResponse = {
  conditionId: "<id>",
  window: "all_time",
  sortBy: "total_pnl",
  entries: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conditionId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | Market condition ID                                                |
| `window`                                                           | [data.TimeWindow](../../models/data/time-window.md)                | :heavy_check_mark:                                                 | Time window for rolling metrics.                                   |
| `sortBy`                                                           | [data.LeaderboardSortBy](../../models/data/leaderboard-sort-by.md) | :heavy_check_mark:                                                 | Sort options for leaderboard.                                      |
| `entries`                                                          | [data.LeaderboardEntry](../../models/data/leaderboard-entry.md)[]  | :heavy_check_mark:                                                 | Leaderboard entries                                                |
| `pagination`                                                       | [data.CursorPagination](../../models/data/cursor-pagination.md)    | :heavy_check_mark:                                                 | Cursor-based pagination for endpoints that don't support offset.   |