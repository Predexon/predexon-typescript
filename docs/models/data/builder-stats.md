# BuilderStats

Detailed stats for a single builder.

## Example Usage

```typescript
import { BuilderStats } from "@predexon/sdk/models/data";

let value: BuilderStats = {
  builderCode: "<value>",
  window: "<value>",
  volumeUsd: 5271.65,
  builderFeeUsd: 1003.5,
  platformFeeUsd: 7137.89,
  tradeCount: 464675,
  uniqueTraders: 482373,
  uniqueMarkets: 66643,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `builderCode`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | Builder code (bytes32 hex)                                                               |
| `window`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | Time window for the rolling metrics                                                      |
| `volumeUsd`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `builderFeeUsd`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `platformFeeUsd`                                                                         | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `tradeCount`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `uniqueTraders`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `uniqueMarkets`                                                                          | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `currentTakerBps`                                                                        | *number*                                                                                 | :heavy_minus_sign:                                                                       | Current taker bps (null if rate not yet fetched)                                         |
| `currentMakerBps`                                                                        | *number*                                                                                 | :heavy_minus_sign:                                                                       | Current maker bps (null if rate not yet fetched)                                         |
| `firstSeenAt`                                                                            | *number*                                                                                 | :heavy_minus_sign:                                                                       | Unix timestamp of earliest attributed fill                                               |
| `lastSeenAt`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | Unix timestamp of latest attributed fill                                                 |
| `feeRateHistory`                                                                         | [data.BuilderFeeRateHistoryEntry](../../models/data/builder-fee-rate-history-entry.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |