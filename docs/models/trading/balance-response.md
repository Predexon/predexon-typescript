# BalanceResponse

## Example Usage

```typescript
import { BalanceResponse } from "@predexon/sdk/models/trading";

let value: BalanceResponse = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `balances`                                                                                                                                                   | [trading.Balance](../../models/trading/balance.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `meta`                                                                                                                                                       | [trading.AggregationMeta](../../models/trading/aggregation-meta.md)                                                                                          | :heavy_minus_sign:                                                                                                                                           | Per-plane status metadata on aggregated responses. Surfaces partial failures so clients can detect when a venue timed out or errored while others succeeded. |