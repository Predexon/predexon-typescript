# BuilderTimeseriesPoint

One bucket in a builder timeseries.

## Example Usage

```typescript
import { BuilderTimeseriesPoint } from "@predexon/sdk/models/data";

let value: BuilderTimeseriesPoint = {
  timestamp: 842216,
  volumeUsd: 6794.07,
  builderFeeUsd: 7967.01,
  tradeCount: 190662,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `timestamp`                    | *number*                       | :heavy_check_mark:             | Unix timestamp at bucket start |
| `volumeUsd`                    | *number*                       | :heavy_check_mark:             | N/A                            |
| `builderFeeUsd`                | *number*                       | :heavy_check_mark:             | N/A                            |
| `tradeCount`                   | *number*                       | :heavy_check_mark:             | N/A                            |