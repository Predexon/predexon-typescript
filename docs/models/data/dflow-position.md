# DflowPosition

Individual dflow position.

## Example Usage

```typescript
import { DflowPosition } from "@predexon/sdk/models/data";

let value: DflowPosition = {
  outcomeMint: "<value>",
  status: "closed",
  totalCostBasis: 9537.45,
  avgEntryPrice: 4082.01,
  realizedPnl: 2070.7,
  feesPaid: 5550.44,
  totalQtyBought: 595.36,
  totalQtySold: 9902,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `outcomeMint`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Outcome token mint address                                             |
| `marketTicker`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | Market ticker identifier                                               |
| `marketTitle`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Human-readable market title                                            |
| `yesSubtitle`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Yes outcome subtitle                                                   |
| `noSubtitle`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | No outcome subtitle                                                    |
| `outcome`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | Outcome side: yes or no                                                |
| `status`                                                               | [data.DflowPositionStatus](../../models/data/dflow-position-status.md) | :heavy_check_mark:                                                     | Dflow position status enum.                                            |
| `totalCostBasis`                                                       | *number*                                                               | :heavy_check_mark:                                                     | Total cost basis in USD                                                |
| `avgEntryPrice`                                                        | *number*                                                               | :heavy_check_mark:                                                     | Average entry price per token                                          |
| `realizedPnl`                                                          | *number*                                                               | :heavy_check_mark:                                                     | Realized PnL in USD                                                    |
| `feesPaid`                                                             | *number*                                                               | :heavy_check_mark:                                                     | Total fees paid in USD                                                 |
| `totalQtyBought`                                                       | *number*                                                               | :heavy_check_mark:                                                     | Total quantity bought                                                  |
| `totalQtySold`                                                         | *number*                                                               | :heavy_check_mark:                                                     | Total quantity sold                                                    |
| `firstTradeAt`                                                         | *number*                                                               | :heavy_minus_sign:                                                     | Unix timestamp of first trade                                          |
| `lastTradeAt`                                                          | *number*                                                               | :heavy_minus_sign:                                                     | Unix timestamp of last trade                                           |