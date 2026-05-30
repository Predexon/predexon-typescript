# PolymarketListCryptoMarketsRequest

## Example Usage

```typescript
import { PolymarketListCryptoMarketsRequest } from "@predexon/sdk/models/operations";

let value: PolymarketListCryptoMarketsRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `asset`                                                           | [data.CryptoAsset](../../models/data/crypto-asset.md)             | :heavy_minus_sign:                                                | Filter by crypto asset: btc, eth, sol, xrp, hype, doge, bnb       |
| `timeframe`                                                       | [data.CryptoTimeframe](../../models/data/crypto-timeframe.md)     | :heavy_minus_sign:                                                | Filter by timeframe: 5m, 15m, 1h, 4h, daily                       |
| `status`                                                          | [data.StatusFilter](../../models/data/status-filter.md)           | :heavy_minus_sign:                                                | Filter by market status: open, closed                             |
| `endAfter`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Only markets with end_time after this Unix timestamp              |
| `endBefore`                                                       | *number*                                                          | :heavy_minus_sign:                                                | Only markets with end_time before or at this Unix timestamp       |
| `sort`                                                            | [data.SortOrder](../../models/data/sort-order.md)                 | :heavy_minus_sign:                                                | Sort by end_time: desc (most recent first) or asc (chronological) |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Number of markets to return                                       |
| `offset`                                                          | *number*                                                          | :heavy_minus_sign:                                                | Offset for pagination                                             |