# WalletMarketsResponse

Response for wallet's per-market breakdown.

## Example Usage

```typescript
import { WalletMarketsResponse } from "@predexon/sdk/models/data";

let value: WalletMarketsResponse = {
  user: "Graham_Ryan",
  window: "all_time",
  markets: [],
  pagination: {
    limit: 605740,
    count: 110130,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `user`                                                               | *string*                                                             | :heavy_check_mark:                                                   | Wallet address                                                       |
| `window`                                                             | [data.TimeWindow](../../models/data/time-window.md)                  | :heavy_check_mark:                                                   | Time window for rolling metrics.                                     |
| `markets`                                                            | [data.WalletMarketEntry](../../models/data/wallet-market-entry.md)[] | :heavy_check_mark:                                                   | Per-market metrics                                                   |
| `pagination`                                                         | [data.CursorPagination](../../models/data/cursor-pagination.md)      | :heavy_check_mark:                                                   | Cursor-based pagination for endpoints that don't support offset.     |