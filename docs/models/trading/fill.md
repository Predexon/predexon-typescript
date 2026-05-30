# Fill

## Example Usage

```typescript
import { Fill } from "@predexon/sdk/models/trading";

let value: Fill = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `venue`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | N/A                                                                       |
| `orderId`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Venue-native order ID. Use this for venue-side reconciliation.            |
| `status`                                                                  | [trading.FillStatus](../../models/trading/fill-status.md)                 | :heavy_minus_sign:                                                        | N/A                                                                       |
| `size`                                                                    | *string*                                                                  | :heavy_minus_sign:                                                        | Shares filled or resting (6-decimal normalized). `0` for failed legs.     |
| `price`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Execution price for this leg (6-decimal normalized).                      |
| `amount`                                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Money moved on this leg in the venue's stablecoin (6-decimal normalized). |
| `error`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Present only on `failed` legs.                                            |