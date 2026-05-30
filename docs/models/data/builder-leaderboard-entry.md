# BuilderLeaderboardEntry

One row in the builder leaderboard.

## Example Usage

```typescript
import { BuilderLeaderboardEntry } from "@predexon/sdk/models/data";

let value: BuilderLeaderboardEntry = {
  rank: 429525,
  builderCode: "<value>",
  volumeUsd: 8034.45,
  builderFeeUsd: 3938.51,
  platformFeeUsd: 6138.39,
  tradeCount: 842041,
  uniqueTraders: 174610,
  uniqueMarkets: 222172,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `rank`                                                     | *number*                                                   | :heavy_check_mark:                                         | Position in leaderboard (1-indexed)                        |
| `builderCode`                                              | *string*                                                   | :heavy_check_mark:                                         | Builder code (bytes32 hex)                                 |
| `volumeUsd`                                                | *number*                                                   | :heavy_check_mark:                                         | Attributed trade notional in USD over the window           |
| `builderFeeUsd`                                            | *number*                                                   | :heavy_check_mark:                                         | Builder fee revenue in USD over the window                 |
| `platformFeeUsd`                                           | *number*                                                   | :heavy_check_mark:                                         | Platform fee on attributed trades (informational)          |
| `tradeCount`                                               | *number*                                                   | :heavy_check_mark:                                         | Number of V2 OrderFilled rows attributed to this builder   |
| `uniqueTraders`                                            | *number*                                                   | :heavy_check_mark:                                         | Unique non-internal addresses that traded via this builder |
| `uniqueMarkets`                                            | *number*                                                   | :heavy_check_mark:                                         | Unique condition_ids touched                               |
| `currentTakerBps`                                          | *number*                                                   | :heavy_minus_sign:                                         | Current taker bps (null if rate not yet fetched)           |
| `currentMakerBps`                                          | *number*                                                   | :heavy_minus_sign:                                         | Current maker bps (null if rate not yet fetched)           |