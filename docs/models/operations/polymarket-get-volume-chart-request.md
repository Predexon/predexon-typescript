# PolymarketGetVolumeChartRequest

## Example Usage

```typescript
import { PolymarketGetVolumeChartRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetVolumeChartRequest = {
  conditionId: "<id>",
  startTime: 710093,
  endTime: 727448,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conditionId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | Condition ID for the market                                                  |
| `granularity`                                                                | [data.VolumeChartGranularity](../../models/data/volume-chart-granularity.md) | :heavy_minus_sign:                                                           | Time granularity: hour, day, or week                                         |
| `startTime`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp (seconds) for start of time range                             |
| `endTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp (seconds) for end of time range                               |