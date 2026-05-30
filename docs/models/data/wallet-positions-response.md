# WalletPositionsResponse

Wallet positions endpoint response.

## Example Usage

```typescript
import { WalletPositionsResponse } from "@predexon/sdk/models/data";

let value: WalletPositionsResponse = {
  walletAddress: "<value>",
  positions: [
    {
      market: {
        conditionId: "<id>",
        marketSlug: "<value>",
        title: "<value>",
        side: "YES",
        sideLabel: "<value>",
        tokenId: "<id>",
        status: "resolved_win",
      },
      position: {
        shares: 4123.03,
        totalSharesBought: 6619.8,
        avgEntryPrice: 8578.41,
        totalCostUsd: 2444.32,
      },
      current: {
        price: 6667.79,
        valueUsd: 3778.34,
      },
      pnl: {
        unrealizedUsd: 2046.52,
        unrealizedPct: 6052.08,
        realizedUsd: 3770.4,
      },
    },
  ],
  summary: {
    totalPositions: 459460,
    totalValueUsd: 2692.37,
    totalCostUsd: 7105.78,
    totalUnrealizedPnlUsd: 6200.99,
    totalRealizedPnlUsd: 8784.53,
  },
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
| `walletAddress`                                                  | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `positions`                                                      | [data.Position](../../models/data/position.md)[]                 | :heavy_check_mark:                                               | N/A                                                              |
| `summary`                                                        | [data.PositionsSummary](../../models/data/positions-summary.md)  | :heavy_check_mark:                                               | Summary of all positions.                                        |
| `pagination`                                                     | [data.CursorPagination](../../models/data/cursor-pagination.md)  | :heavy_check_mark:                                               | Cursor-based pagination for endpoints that don't support offset. |