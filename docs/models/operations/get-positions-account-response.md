# GetPositionsAccountResponse

Position list

## Example Usage

```typescript
import { GetPositionsAccountResponse } from "@predexon/sdk/models/operations";

let value: GetPositionsAccountResponse = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `positions`                                                                                                                                                  | [trading.AccountPositionResponse](../../models/trading/account-position-response.md)[]                                                                       | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `meta`                                                                                                                                                       | [trading.AggregationMeta](../../models/trading/aggregation-meta.md)                                                                                          | :heavy_minus_sign:                                                                                                                                           | Per-plane status metadata on aggregated responses. Surfaces partial failures so clients can detect when a venue timed out or errored while others succeeded. |