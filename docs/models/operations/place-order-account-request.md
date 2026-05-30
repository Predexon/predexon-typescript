# PlaceOrderAccountRequest

## Example Usage

```typescript
import { PlaceOrderAccountRequest } from "@predexon/sdk/models/operations";

let value: PlaceOrderAccountRequest = {
  accountId: "<id>",
  body: {
    venue: "predict",
    side: "buy",
    type: "market",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `accountId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `body`                                                                                  | [trading.AccountPlaceOrderRequest](../../models/trading/account-place-order-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |