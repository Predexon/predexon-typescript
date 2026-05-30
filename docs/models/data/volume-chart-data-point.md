# VolumeChartDataPoint

Individual volume chart data point.

## Example Usage

```typescript
import { VolumeChartDataPoint } from "@predexon/sdk/models/data";

let value: VolumeChartDataPoint = {
  timestamp: 99297,
  totalVolume: 1557.24,
  yesVolume: 9166.86,
  noVolume: 9240.68,
  tradesCount: 926467,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `timestamp`                                 | *number*                                    | :heavy_check_mark:                          | Unix timestamp in seconds (start of period) |
| `totalVolume`                               | *number*                                    | :heavy_check_mark:                          | Total USD volume in this period             |
| `yesVolume`                                 | *number*                                    | :heavy_check_mark:                          | YES-side USD volume in this period          |
| `noVolume`                                  | *number*                                    | :heavy_check_mark:                          | NO-side USD volume in this period           |
| `tradesCount`                               | *number*                                    | :heavy_check_mark:                          | Number of trades in this period             |