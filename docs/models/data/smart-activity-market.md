# SmartActivityMarket

Market with smart wallet activity stats.

## Example Usage

```typescript
import { SmartActivityMarket } from "@predexon/sdk/models/data";

let value: SmartActivityMarket = {
  conditionId: "<id>",
  smartWalletCount: 596825,
  smartVolume: 4588.29,
  smartRealizedPnl: 1659.55,
  smartTotalPnl: 8119.6,
  avgSmartRoi: 6928.92,
  avgSmartWinRate: 6273.63,
  netBuyersPct: 2102.21,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `conditionId`                                         | *string*                                              | :heavy_check_mark:                                    | Market condition ID                                   |
| `title`                                               | *string*                                              | :heavy_minus_sign:                                    | Market title                                          |
| `marketSlug`                                          | *string*                                              | :heavy_minus_sign:                                    | Market slug for URL construction                      |
| `smartWalletCount`                                    | *number*                                              | :heavy_check_mark:                                    | Number of smart wallets that traded this market       |
| `smartVolume`                                         | *number*                                              | :heavy_check_mark:                                    | Total volume from smart wallets (USD)                 |
| `smartRealizedPnl`                                    | *number*                                              | :heavy_check_mark:                                    | Total realized PnL from smart wallets (USD)           |
| `smartTotalPnl`                                       | *number*                                              | :heavy_check_mark:                                    | Total net total PnL from smart wallets (USD)          |
| `avgSmartRoi`                                         | *number*                                              | :heavy_check_mark:                                    | Average ROI of smart wallets in this market           |
| `avgSmartWinRate`                                     | *number*                                              | :heavy_check_mark:                                    | Average win rate of smart wallets in this market      |
| `netBuyersPct`                                        | *number*                                              | :heavy_check_mark:                                    | Percentage of smart wallets that are net buyers (0-1) |