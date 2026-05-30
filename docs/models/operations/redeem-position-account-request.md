# RedeemPositionAccountRequest

## Example Usage

```typescript
import { RedeemPositionAccountRequest } from "@predexon/sdk/models/operations";

let value: RedeemPositionAccountRequest = {
  accountId: "<id>",
  body: {
    venue: "limitless",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `body`                                                                         | [trading.AccountRedeemRequest](../../models/trading/account-redeem-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |