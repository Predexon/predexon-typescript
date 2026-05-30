# WalletMarketEntry

Per-market metrics for a wallet.

## Example Usage

```typescript
import { WalletMarketEntry } from "@predexon/sdk/models/data";

let value: WalletMarketEntry = {
  conditionId: "<id>",
  metrics: {
    realizedPnl: 4261.63,
    volume: 3915.14,
    roi: 1053.76,
    trades: 743095,
    wins: 815433,
    losses: 511234,
    winRate: 6533.35,
    profitFactor: 2787.36,
    positionsClosed: 496297,
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `conditionId`                                             | *string*                                                  | :heavy_check_mark:                                        | Market condition ID                                       |
| `title`                                                   | *string*                                                  | :heavy_minus_sign:                                        | Market title (resolved from market_state)                 |
| `marketSlug`                                              | *string*                                                  | :heavy_minus_sign:                                        | Market slug for URL construction                          |
| `metrics`                                                 | [data.WindowMetrics](../../models/data/window-metrics.md) | :heavy_check_mark:                                        | Metrics for a specific time window.                       |
| `entryEdge`                                               | *number*                                                  | :heavy_minus_sign:                                        | Price edge for this market                                |
| `firstTradeAt`                                            | *number*                                                  | :heavy_minus_sign:                                        | First trade timestamp in this market                      |
| `lastTradeAt`                                             | *number*                                                  | :heavy_minus_sign:                                        | Last trade timestamp in this market                       |