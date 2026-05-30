# QuoteTransferRequest

## Example Usage

```typescript
import { QuoteTransferRequest } from "@predexon/sdk/models/operations";

let value: QuoteTransferRequest = {
  accountId: "<id>",
  body: {
    from: "opinion",
    to: "external",
    amount: "124.32",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accountId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `body`                                                                         | [trading.TransferQuoteRequest](../../models/trading/transfer-quote-request.md) | :heavy_check_mark:                                                             | N/A                                                                            |