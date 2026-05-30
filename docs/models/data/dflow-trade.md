# DflowTrade

Individual dflow trade.

## Example Usage

```typescript
import { DflowTrade } from "@predexon/sdk/models/data";

let value: DflowTrade = {
  signature: "<value>",
  slot: 172697,
  timestamp: 918652,
  tradeType: "BUY_FILL",
  ownerWallet: "<value>",
  outcomeMint: "<value>",
  inputAmount: 3498.07,
  outputAmount: 2687.68,
  tradePrice: 3495.78,
  realizedPnl: 808.31,
  feeAmount: 7875.11,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `signature`                                                  | *string*                                                     | :heavy_check_mark:                                           | Solana transaction signature                                 |
| `slot`                                                       | *number*                                                     | :heavy_check_mark:                                           | Solana slot number                                           |
| `timestamp`                                                  | *number*                                                     | :heavy_check_mark:                                           | Unix timestamp in seconds                                    |
| `tradeType`                                                  | [data.DflowTradeType](../../models/data/dflow-trade-type.md) | :heavy_check_mark:                                           | Dflow trade type enum.                                       |
| `ownerWallet`                                                | *string*                                                     | :heavy_check_mark:                                           | Wallet address of the trade owner                            |
| `marketTicker`                                               | *string*                                                     | :heavy_minus_sign:                                           | Market ticker identifier                                     |
| `outcomeMint`                                                | *string*                                                     | :heavy_check_mark:                                           | Outcome token mint address                                   |
| `inputAmount`                                                | *number*                                                     | :heavy_check_mark:                                           | Input amount                                                 |
| `outputAmount`                                               | *number*                                                     | :heavy_check_mark:                                           | Output amount                                                |
| `tradePrice`                                                 | *number*                                                     | :heavy_check_mark:                                           | Trade execution price                                        |
| `realizedPnl`                                                | *number*                                                     | :heavy_check_mark:                                           | Realized PnL from this trade                                 |
| `feeAmount`                                                  | *number*                                                     | :heavy_check_mark:                                           | Fee amount paid                                              |
| `title`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Human-readable market title                                  |
| `side`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Trade side: YES or NO                                        |