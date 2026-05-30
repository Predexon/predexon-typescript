# GetOrdersAccountResponse

Order list

## Example Usage

```typescript
import { GetOrdersAccountResponse } from "@predexon/sdk/models/operations";

let value: GetOrdersAccountResponse = {};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `orders`                                                                                                                                                     | [trading.AccountOrderResponse](../../models/trading/account-order-response.md)[]                                                                             | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `meta`                                                                                                                                                       | [trading.AggregationMeta](../../models/trading/aggregation-meta.md)                                                                                          | :heavy_minus_sign:                                                                                                                                           | Per-plane status metadata on aggregated responses. Surfaces partial failures so clients can detect when a venue timed out or errored while others succeeded. |