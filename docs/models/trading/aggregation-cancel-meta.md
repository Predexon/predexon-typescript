# AggregationCancelMeta

Per-plane status metadata on aggregated cancel-all responses. Each venue entry also reports how many of its orders were cancelled.

## Example Usage

```typescript
import { AggregationCancelMeta } from "@predexon/sdk/models/trading";

let value: AggregationCancelMeta = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `venues`                                                                                      | [trading.AggregationCancelMetaVenue](../../models/trading/aggregation-cancel-meta-venue.md)[] | :heavy_minus_sign:                                                                            | N/A                                                                                           |