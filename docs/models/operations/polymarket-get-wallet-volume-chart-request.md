# PolymarketGetWalletVolumeChartRequest

## Example Usage

```typescript
import { PolymarketGetWalletVolumeChartRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetWalletVolumeChartRequest = {
  wallet: "<value>",
  startTime: 399188,
  endTime: 94034,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `wallet`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | Wallet address to fetch volume chart for                                     |
| `granularity`                                                                | [data.VolumeChartGranularity](../../models/data/volume-chart-granularity.md) | :heavy_minus_sign:                                                           | Time granularity: hour, day, or week                                         |
| `startTime`                                                                  | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp (seconds) for start of time range                             |
| `endTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | Unix timestamp (seconds) for end of time range                               |