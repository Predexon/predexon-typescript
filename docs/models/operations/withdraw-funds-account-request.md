# WithdrawFundsAccountRequest

## Example Usage

```typescript
import { WithdrawFundsAccountRequest } from "@predexon/sdk/models/operations";

let value: WithdrawFundsAccountRequest = {
  accountId: "<id>",
  body: {
    venue: "polymarket",
    amount: "994.58",
    destinationAddress: "<value>",
    chain: "bsc",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `accountId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | [trading.WithdrawRequest](../../models/trading/withdraw-request.md) | :heavy_check_mark:                                                  | N/A                                                                 |