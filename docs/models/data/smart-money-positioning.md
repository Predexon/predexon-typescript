# SmartMoneyPositioning

Aggregate smart money positioning for a market.

## Example Usage

```typescript
import { SmartMoneyPositioning } from "@predexon/sdk/models/data";

let value: SmartMoneyPositioning = {
  conditionId: "<id>",
  smartWalletCount: 763552,
  netBuyers: 648238,
  netSellers: 844435,
  neutral: 850783,
  netBuyersPct: 382.14,
  totalSmartVolume: 4295.34,
  totalSmartBuyVolume: 9792.35,
  totalSmartSellVolume: 3698.68,
  avgSmartBuyPrice: 7178.37,
  avgSmartSellPrice: 465.5,
  totalSmartRealizedPnl: 3588.1,
  totalSmartTotalPnl: 9266.25,
  avgSmartRoi: 8258.7,
  avgSmartWinRate: 5585.24,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conditionId`                                                | *string*                                                     | :heavy_check_mark:                                           | Market condition ID                                          |
| `title`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Market title                                                 |
| `marketSlug`                                                 | *string*                                                     | :heavy_minus_sign:                                           | Market slug for URL construction                             |
| `smartWalletCount`                                           | *number*                                                     | :heavy_check_mark:                                           | Number of smart wallets in this market                       |
| `netBuyers`                                                  | *number*                                                     | :heavy_check_mark:                                           | Smart wallets that are net buyers (buy_volume > sell_volume) |
| `netSellers`                                                 | *number*                                                     | :heavy_check_mark:                                           | Smart wallets that are net sellers                           |
| `neutral`                                                    | *number*                                                     | :heavy_check_mark:                                           | Smart wallets with balanced buy/sell                         |
| `netBuyersPct`                                               | *number*                                                     | :heavy_check_mark:                                           | Percentage of smart wallets that are net buyers (0-1)        |
| `totalSmartVolume`                                           | *number*                                                     | :heavy_check_mark:                                           | Total volume from smart wallets (USD)                        |
| `totalSmartBuyVolume`                                        | *number*                                                     | :heavy_check_mark:                                           | Total buy volume from smart wallets (USD)                    |
| `totalSmartSellVolume`                                       | *number*                                                     | :heavy_check_mark:                                           | Total sell volume from smart wallets (USD)                   |
| `avgSmartBuyPrice`                                           | *number*                                                     | :heavy_check_mark:                                           | Volume-weighted average buy price of smart wallets (0-1)     |
| `avgSmartSellPrice`                                          | *number*                                                     | :heavy_check_mark:                                           | Volume-weighted average sell price of smart wallets (0-1)    |
| `totalSmartRealizedPnl`                                      | *number*                                                     | :heavy_check_mark:                                           | Total realized PnL from smart wallets (USD)                  |
| `totalSmartTotalPnl`                                         | *number*                                                     | :heavy_check_mark:                                           | Total net total PnL from smart wallets (USD)                 |
| `avgSmartRoi`                                                | *number*                                                     | :heavy_check_mark:                                           | Average ROI of smart wallets                                 |
| `avgSmartWinRate`                                            | *number*                                                     | :heavy_check_mark:                                           | Average win rate of smart wallets                            |