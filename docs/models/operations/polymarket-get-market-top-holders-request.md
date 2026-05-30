# PolymarketGetMarketTopHoldersRequest

## Example Usage

```typescript
import { PolymarketGetMarketTopHoldersRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetMarketTopHoldersRequest = {
  conditionId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `conditionId`                             | *string*                                  | :heavy_check_mark:                        | Market condition ID                       |
| `side`                                    | *string*                                  | :heavy_minus_sign:                        | Filter by position side: 'yes' or 'no'    |
| `minShares`                               | *number*                                  | :heavy_minus_sign:                        | Minimum shares held (normalized)          |
| `minTrades`                               | *number*                                  | :heavy_minus_sign:                        | Minimum number of trades                  |
| `includeCount`                            | *boolean*                                 | :heavy_minus_sign:                        | Include total holder count (slower query) |
| `limit`                                   | *number*                                  | :heavy_minus_sign:                        | Results per page                          |
| `paginationKey`                           | *string*                                  | :heavy_minus_sign:                        | Cursor for pagination                     |