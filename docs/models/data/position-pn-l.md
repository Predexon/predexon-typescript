# PositionPnL

Profit and loss for a position.

## Example Usage

```typescript
import { PositionPnL } from "@predexon/sdk/models/data";

let value: PositionPnL = {
  unrealizedUsd: 3018.24,
  unrealizedPct: 5715.51,
  realizedUsd: 71.03,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `unrealizedUsd`              | *number*                     | :heavy_check_mark:           | Unrealized P&L in USD        |
| `unrealizedPct`              | *number*                     | :heavy_check_mark:           | Unrealized P&L as percentage |
| `realizedUsd`                | *number*                     | :heavy_check_mark:           | Realized P&L in USD          |