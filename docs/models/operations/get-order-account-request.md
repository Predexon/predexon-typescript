# GetOrderAccountRequest

## Example Usage

```typescript
import { GetOrderAccountRequest } from "@predexon/sdk/models/operations";

let value: GetOrderAccountRequest = {
  accountId: "<id>",
  orderId: "<id>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `accountId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `orderId`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `venue`                                                                               | [operations.GetOrderAccountVenue](../../models/operations/get-order-account-venue.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |