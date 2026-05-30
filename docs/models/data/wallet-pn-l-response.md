# WalletPnLResponse

Wallet PnL endpoint response.

## Example Usage

```typescript
import { WalletPnLResponse } from "@predexon/sdk/models/data";

let value: WalletPnLResponse = {
  granularity: "all",
  startTime: 365099,
  endTime: 392281,
  walletAddress: "<value>",
  pnlOverTime: [
    {
      timestamp: 470325,
      pnlToDate: 6322.36,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `granularity`                                                    | [data.PnLGranularity](../../models/data/pn-l-granularity.md)     | :heavy_check_mark:                                               | PnL granularity enum.                                            |
| `startTime`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `endTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `walletAddress`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `realizedPnl`                                                    | *number*                                                         | :heavy_minus_sign:                                               | Current total realized PnL (USD)                                 |
| `unrealizedPnl`                                                  | *number*                                                         | :heavy_minus_sign:                                               | Current unrealized PnL (USD), computed live from positions       |
| `feesPaid`                                                       | *number*                                                         | :heavy_minus_sign:                                               | Total taker fees paid (USD)                                      |
| `feesRefunded`                                                   | *number*                                                         | :heavy_minus_sign:                                               | DEPRECATED: always 0. Refunds are already netted into fees_paid. |
| `totalPnl`                                                       | *number*                                                         | :heavy_minus_sign:                                               | realized + unrealized - fees_paid (USD)                          |
| `pnlOverTime`                                                    | [data.PnLDataPoint](../../models/data/pn-l-data-point.md)[]      | :heavy_check_mark:                                               | N/A                                                              |