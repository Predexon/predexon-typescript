# PolymarketGetSimilarWalletsRequest

## Example Usage

```typescript
import { PolymarketGetSimilarWalletsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetSimilarWalletsRequest = {
  wallet: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `wallet`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | Target wallet address                                                     |
| `window`                                                                  | [data.TimeWindow](../../models/data/time-window.md)                       | :heavy_minus_sign:                                                        | Time window for metrics                                                   |
| `minOverlapPct`                                                           | *number*                                                                  | :heavy_minus_sign:                                                        | Minimum overlap percentage (0-1). E.g., 0.5 = at least 50% market overlap |
| `minOverlapMarkets`                                                       | *number*                                                                  | :heavy_minus_sign:                                                        | Minimum number of overlapping markets                                     |
| `limit`                                                                   | *number*                                                                  | :heavy_minus_sign:                                                        | Results per page                                                          |
| `paginationKey`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | Cursor for pagination                                                     |