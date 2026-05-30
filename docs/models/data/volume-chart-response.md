# VolumeChartResponse

Volume chart endpoint response.

## Example Usage

```typescript
import { VolumeChartResponse } from "@predexon/sdk/models/data";

let value: VolumeChartResponse = {
  conditionId: "<id>",
  granularity: "day",
  startTime: 115995,
  endTime: 538141,
  data: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conditionId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | Market condition ID                                                          |
| `granularity`                                                                | [data.VolumeChartGranularity](../../models/data/volume-chart-granularity.md) | :heavy_check_mark:                                                           | Granularity for volume chart endpoint.                                       |
| `startTime`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp of first data point                                           |
| `endTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp of last data point                                            |
| `data`                                                                       | [data.VolumeChartDataPoint](../../models/data/volume-chart-data-point.md)[]  | :heavy_check_mark:                                                           | Volume data points                                                           |