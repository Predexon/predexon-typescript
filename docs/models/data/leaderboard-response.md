# LeaderboardResponse

Response for global leaderboard endpoint.

## Example Usage

```typescript
import { LeaderboardResponse } from "@predexon/sdk/models/data";

let value: LeaderboardResponse = {
  window: "all_time",
  sortBy: "trades",
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
| `window`                                                           | [data.TimeWindow](../../models/data/time-window.md)                | :heavy_check_mark:                                                 | Time window for rolling metrics.                                   |
| `sortBy`                                                           | [data.LeaderboardSortBy](../../models/data/leaderboard-sort-by.md) | :heavy_check_mark:                                                 | Sort options for leaderboard.                                      |
| `entries`                                                          | [data.LeaderboardEntry](../../models/data/leaderboard-entry.md)[]  | :heavy_check_mark:                                                 | Leaderboard entries                                                |
| `pagination`                                                       | [data.CursorPagination](../../models/data/cursor-pagination.md)    | :heavy_check_mark:                                                 | Cursor-based pagination for endpoints that don't support offset.   |