# DflowTradesResponse

Dflow trades endpoint response.

## Example Usage

```typescript
import { DflowTradesResponse } from "@predexon/sdk/models/data";

let value: DflowTradesResponse = {
  trades: [
    {
      signature: "<value>",
      slot: 703555,
      timestamp: 784030,
      tradeType: "SELL_FILL",
      ownerWallet: "<value>",
      outcomeMint: "<value>",
      inputAmount: 2670.8,
      outputAmount: 9114.47,
      tradePrice: 8301.72,
      realizedPnl: 7793.92,
      feeAmount: 4468.01,
    },
  ],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `trades`                                                         | [data.DflowTrade](../../models/data/dflow-trade.md)[]            | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |