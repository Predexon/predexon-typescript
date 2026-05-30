# Position

Individual position.

## Example Usage

```typescript
import { Position } from "@predexon/sdk/models/data";

let value: Position = {
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
| `market`                                                                 | [data.PositionMarketInfo](../../models/data/position-market-info.md)     | :heavy_check_mark:                                                       | Market info for a position.                                              |
| `position`                                                               | [data.PositionDetails](../../models/data/position-details.md)            | :heavy_check_mark:                                                       | Position size and cost basis.                                            |
| `current`                                                                | [data.PositionCurrentState](../../models/data/position-current-state.md) | :heavy_check_mark:                                                       | Current market state for a position.                                     |
| `pnl`                                                                    | [data.PositionPnL](../../models/data/position-pn-l.md)                   | :heavy_check_mark:                                                       | Profit and loss for a position.                                          |