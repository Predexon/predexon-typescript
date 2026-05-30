# AggregationMeta

Per-plane status metadata on aggregated responses. Surfaces partial failures so clients can detect when a venue timed out or errored while others succeeded.

## Example Usage

```typescript
import { AggregationMeta } from "@predexon/sdk/models/trading";

let value: AggregationMeta = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `venues`                                                                         | [trading.AggregationMetaVenue](../../models/trading/aggregation-meta-venue.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |