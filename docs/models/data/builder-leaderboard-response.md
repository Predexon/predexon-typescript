# BuilderLeaderboardResponse

Response for builder leaderboard endpoint.

## Example Usage

```typescript
import { BuilderLeaderboardResponse } from "@predexon/sdk/models/data";

let value: BuilderLeaderboardResponse = {
  window: "<value>",
  entries: [
    {
      rank: 231287,
      builderCode: "<value>",
      volumeUsd: 8399.96,
      builderFeeUsd: 5045.31,
      platformFeeUsd: 2143.51,
      tradeCount: 820885,
      uniqueTraders: 996207,
      uniqueMarkets: 179312,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `window`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Time window for metrics (e.g. 24h, 7d, 30d, all)                                 |
| `entries`                                                                        | [data.BuilderLeaderboardEntry](../../models/data/builder-leaderboard-entry.md)[] | :heavy_check_mark:                                                               | Builder leaderboard rows, sorted by volume                                       |