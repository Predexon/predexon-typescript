# DecisionSnapshot

GET detail only, for limit orders. Snapshot of the order book at decision time so you can audit the routing choice. `null` for market orders and pre-rollout records.

## Example Usage

```typescript
import { DecisionSnapshot } from "@predexon/sdk/models/trading";

let value: DecisionSnapshot = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `capturedAt`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | Snapshot timestamp in ms since epoch.                                    |
| `venues`                                                                 | [trading.RouterOrderVenue](../../models/trading/router-order-venue.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |