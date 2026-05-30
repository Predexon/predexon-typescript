# PositionCurrentState

Current market state for a position.

## Example Usage

```typescript
import { PositionCurrentState } from "@predexon/sdk/models/data";

let value: PositionCurrentState = {
  price: 1731.9,
  valueUsd: 477.75,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `price`                       | *number*                      | :heavy_check_mark:            | Current market price (0-1)    |
| `valueUsd`                    | *number*                      | :heavy_check_mark:            | Current position value in USD |