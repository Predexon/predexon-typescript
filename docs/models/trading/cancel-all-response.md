# CancelAllResponse

## Example Usage

```typescript
import { CancelAllResponse } from "@predexon/sdk/models/trading";

let value: CancelAllResponse = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `cancelled`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Number of orders that were cancelled                                                                                               |
| `meta`                                                                                                                             | [trading.AggregationCancelMeta](../../models/trading/aggregation-cancel-meta.md)                                                   | :heavy_minus_sign:                                                                                                                 | Per-plane status metadata on aggregated cancel-all responses. Each venue entry also reports how many of its orders were cancelled. |