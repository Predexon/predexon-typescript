# SmartMoneyResponse

Response for smart money positioning endpoint.

## Example Usage

```typescript
import { SmartMoneyResponse } from "@predexon/sdk/models/data";

let value: SmartMoneyResponse = {
  smartWalletCriteria: {},
  window: "1d",
  positioning: {
    conditionId: "<id>",
    smartWalletCount: 575927,
    netBuyers: 869653,
    netSellers: 521703,
    neutral: 38829,
    netBuyersPct: 3155.74,
    totalSmartVolume: 325.94,
    totalSmartBuyVolume: 3672.03,
    totalSmartSellVolume: 3642.06,
    avgSmartBuyPrice: 6020.3,
    avgSmartSellPrice: 4347.6,
    totalSmartRealizedPnl: 5805.58,
    totalSmartTotalPnl: 2115.04,
    avgSmartRoi: 7938.96,
    avgSmartWinRate: 4093.85,
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `smartWalletCriteria`                                                                                         | [data.SmartMoneyResponseSmartWalletCriteria](../../models/data/smart-money-response-smart-wallet-criteria.md) | :heavy_check_mark:                                                                                            | Criteria used to define smart wallets                                                                         |
| `window`                                                                                                      | [data.TimeWindow](../../models/data/time-window.md)                                                           | :heavy_check_mark:                                                                                            | Time window for rolling metrics.                                                                              |
| `positioning`                                                                                                 | [data.SmartMoneyPositioning](../../models/data/smart-money-positioning.md)                                    | :heavy_check_mark:                                                                                            | Aggregate smart money positioning for a market.                                                               |