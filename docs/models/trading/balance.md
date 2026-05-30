# Balance

## Example Usage

```typescript
import { Balance } from "@predexon/sdk/models/trading";

let value: Balance = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `venue`                                            | *string*                                           | :heavy_minus_sign:                                 | Trading venue                                      |
| `available`                                        | *string*                                           | :heavy_minus_sign:                                 | Funds available for trading (not locked in orders) |
| `locked`                                           | *string*                                           | :heavy_minus_sign:                                 | Funds locked in open orders                        |
| `total`                                            | *string*                                           | :heavy_minus_sign:                                 | Total balance (available + locked)                 |