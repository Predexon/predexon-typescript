# PolymarketGetCohortStatsRequest

## Example Usage

```typescript
import { PolymarketGetCohortStatsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetCohortStatsRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `window`                                                | [data.TimeWindow](../../models/data/time-window.md)     | :heavy_minus_sign:                                      | Time window for metrics                                 |
| `minTrades`                                             | *number*                                                | :heavy_minus_sign:                                      | Minimum trades to be included in cohort (filters noise) |