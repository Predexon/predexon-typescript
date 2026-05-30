# BuilderMarketEntry

A market attributed to a builder.

## Example Usage

```typescript
import { BuilderMarketEntry } from "@predexon/sdk/models/data";

let value: BuilderMarketEntry = {
  rank: 775872,
  conditionId: "<id>",
  volumeUsd: 4970.74,
  builderFeeUsd: 6141.2,
  tradeCount: 797241,
  uniqueTraders: 572432,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `rank`             | *number*           | :heavy_check_mark: | N/A                |
| `conditionId`      | *string*           | :heavy_check_mark: | N/A                |
| `volumeUsd`        | *number*           | :heavy_check_mark: | N/A                |
| `builderFeeUsd`    | *number*           | :heavy_check_mark: | N/A                |
| `tradeCount`       | *number*           | :heavy_check_mark: | N/A                |
| `uniqueTraders`    | *number*           | :heavy_check_mark: | N/A                |