# WalletSimilarityResponse

Response for wallet similarity endpoint.

## Example Usage

```typescript
import { WalletSimilarityResponse } from "@predexon/sdk/models/data";

let value: WalletSimilarityResponse = {
  targetWallet: "<value>",
  targetMarketCount: 313699,
  window: "1d",
  similarWallets: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `targetWallet`                                                         | *string*                                                               | :heavy_check_mark:                                                     | The wallet we're finding similar wallets for                           |
| `targetMarketCount`                                                    | *number*                                                               | :heavy_check_mark:                                                     | Number of markets the target wallet has traded                         |
| `window`                                                               | [data.TimeWindow](../../models/data/time-window.md)                    | :heavy_check_mark:                                                     | Time window for rolling metrics.                                       |
| `similarWallets`                                                       | [data.SimilarWalletEntry](../../models/data/similar-wallet-entry.md)[] | :heavy_check_mark:                                                     | Wallets with similar market portfolios                                 |
| `pagination`                                                           | [data.CursorPagination](../../models/data/cursor-pagination.md)        | :heavy_check_mark:                                                     | Cursor-based pagination for endpoints that don't support offset.       |