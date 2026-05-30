# WalletVolumeChartDataPoint

Individual wallet volume chart data point.

## Example Usage

```typescript
import { WalletVolumeChartDataPoint } from "@predexon/sdk/models/data";

let value: WalletVolumeChartDataPoint = {
  timestamp: 136899,
  totalVolume: 162.34,
  buyVolume: 3285.6,
  sellVolume: 563.74,
  tradesCount: 754406,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `timestamp`                                 | *number*                                    | :heavy_check_mark:                          | Unix timestamp in seconds (start of period) |
| `totalVolume`                               | *number*                                    | :heavy_check_mark:                          | Total USD volume in this period             |
| `buyVolume`                                 | *number*                                    | :heavy_check_mark:                          | BUY-side USD volume in this period          |
| `sellVolume`                                | *number*                                    | :heavy_check_mark:                          | SELL-side USD volume in this period         |
| `tradesCount`                               | *number*                                    | :heavy_check_mark:                          | Number of trades in this period             |