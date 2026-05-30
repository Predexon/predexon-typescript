# WalletVolumeChartResponse

Wallet volume chart endpoint response.

## Example Usage

```typescript
import { WalletVolumeChartResponse } from "@predexon/sdk/models/data";

let value: WalletVolumeChartResponse = {
  walletAddress: "<value>",
  granularity: "week",
  startTime: 588122,
  endTime: 134273,
  data: [
    {
      timestamp: 664897,
      totalVolume: 6888.92,
      buyVolume: 3951.1,
      sellVolume: 6953.6,
      tradesCount: 758104,
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `walletAddress`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | Wallet address                                                                           |
| `granularity`                                                                            | [data.VolumeChartGranularity](../../models/data/volume-chart-granularity.md)             | :heavy_check_mark:                                                                       | Granularity for volume chart endpoint.                                                   |
| `startTime`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | Unix timestamp of first data point                                                       |
| `endTime`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | Unix timestamp of last data point                                                        |
| `data`                                                                                   | [data.WalletVolumeChartDataPoint](../../models/data/wallet-volume-chart-data-point.md)[] | :heavy_check_mark:                                                                       | Volume data points                                                                       |