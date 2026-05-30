# TransfersList

## Example Usage

```typescript
import { TransfersList } from "@predexon/sdk/models/trading";

let value: TransfersList = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `transfers`                                                | [trading.Transfer](../../models/trading/transfer.md)[]     | :heavy_minus_sign:                                         | N/A                                                        |
| `nextCursor`                                               | *string*                                                   | :heavy_minus_sign:                                         | Pagination cursor; pass to the next request as `?cursor=`. |