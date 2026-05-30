# PolymarketGetSmartMoneyPositioningRequest

## Example Usage

```typescript
import { PolymarketGetSmartMoneyPositioningRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetSmartMoneyPositioningRequest = {
  conditionId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `conditionId`                                             | *string*                                                  | :heavy_check_mark:                                        | Market condition ID                                       |
| `window`                                                  | [data.TimeWindow](../../models/data/time-window.md)       | :heavy_minus_sign:                                        | Time window for metrics                                   |
| `minRealizedPnl`                                          | *number*                                                  | :heavy_minus_sign:                                        | Minimum global realized PnL to be 'smart' (USD)           |
| `minTotalPnl`                                             | *number*                                                  | :heavy_minus_sign:                                        | Minimum global total PnL to be 'smart' (USD, net of fees) |
| `minRoi`                                                  | *number*                                                  | :heavy_minus_sign:                                        | Minimum global ROI to be 'smart' (decimal)                |
| `minWinRate`                                              | *number*                                                  | :heavy_minus_sign:                                        | Minimum global win rate (decimal)                         |
| `minProfitFactor`                                         | *number*                                                  | :heavy_minus_sign:                                        | Minimum global profit factor                              |
| `minTrades`                                               | *number*                                                  | :heavy_minus_sign:                                        | Minimum global trade count                                |
| `minVolume`                                               | *number*                                                  | :heavy_minus_sign:                                        | Minimum global volume (USD)                               |