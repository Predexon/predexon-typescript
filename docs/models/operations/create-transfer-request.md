# CreateTransferRequest

## Example Usage

```typescript
import { CreateTransferRequest } from "@predexon/sdk/models/operations";

let value: CreateTransferRequest = {
  accountId: "<id>",
  body: {
    from: "polymarket",
    to: "predict",
    amount: "154.74",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `body`                                                                           | [trading.CreateTransferRequest](../../models/trading/create-transfer-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |