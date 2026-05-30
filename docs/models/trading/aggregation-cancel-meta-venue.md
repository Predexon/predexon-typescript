# AggregationCancelMetaVenue

## Example Usage

```typescript
import { AggregationCancelMetaVenue } from "@predexon/sdk/models/trading";

let value: AggregationCancelMetaVenue = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `venue`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [trading.AggregationCancelMetaStatus](../../models/trading/aggregation-cancel-meta-status.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cancelled`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Orders cancelled on this venue (present when status is `ok`)                                  |