# CancelOrderAccountRequest

## Example Usage

```typescript
import { CancelOrderAccountRequest } from "@predexon/sdk/models/operations";

let value: CancelOrderAccountRequest = {
  accountId: "<id>",
  orderId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `accountId`                                                                                 | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `orderId`                                                                                   | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `venue`                                                                                     | [operations.CancelOrderAccountVenue](../../models/operations/cancel-order-account-venue.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |