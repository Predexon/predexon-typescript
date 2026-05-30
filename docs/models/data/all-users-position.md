# AllUsersPosition

Position with user info for all-users endpoint (same format as wallet/positions).

## Example Usage

```typescript
import { AllUsersPosition } from "@predexon/sdk/models/data";

let value: AllUsersPosition = {
  user: "Arden.Ward",
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `user`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Wallet address                                                           |
| `market`                                                                 | [data.PositionMarketInfo](../../models/data/position-market-info.md)     | :heavy_check_mark:                                                       | Market info for a position.                                              |
| `position`                                                               | [data.PositionDetails](../../models/data/position-details.md)            | :heavy_check_mark:                                                       | Position size and cost basis.                                            |
| `current`                                                                | [data.PositionCurrentState](../../models/data/position-current-state.md) | :heavy_check_mark:                                                       | Current market state for a position.                                     |
| `pnl`                                                                    | [data.PositionPnL](../../models/data/position-pn-l.md)                   | :heavy_check_mark:                                                       | Profit and loss for a position.                                          |
| `lastUpdatedAt`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | Unix timestamp of last position update                                   |
| `lastUpdatedBlock`                                                       | *number*                                                                 | :heavy_minus_sign:                                                       | Block number of last position update                                     |