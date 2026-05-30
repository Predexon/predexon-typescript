# RouterQuoteRequest

## Example Usage

```typescript
import { RouterQuoteRequest } from "@predexon/sdk/models/operations";

let value: RouterQuoteRequest = {
  accountId: "<id>",
  predexonId: "<id>",
  side: "buy",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `accountId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `predexonId`                                       | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `side`                                             | [operations.Side](../../models/operations/side.md) | :heavy_check_mark:                                 | N/A                                                |
| `amount`                                           | *number*                                           | :heavy_minus_sign:                                 | USD notional. Required when `side=buy`.            |
| `size`                                             | *number*                                           | :heavy_minus_sign:                                 | Share count. Required when `side=sell`.            |