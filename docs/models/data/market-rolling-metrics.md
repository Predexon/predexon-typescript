# MarketRollingMetrics

Rolling window metrics from market_metrics_summary (hourly cron refresh).

## Example Usage

```typescript
import { MarketRollingMetrics } from "@predexon/sdk/models/data";

let value: MarketRollingMetrics = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `volume1d`                                         | *number*                                           | :heavy_minus_sign:                                 | Volume in USD over last 24 hours                   |
| `volume7d`                                         | *number*                                           | :heavy_minus_sign:                                 | Volume in USD over last 7 days                     |
| `volume30d`                                        | *number*                                           | :heavy_minus_sign:                                 | Volume in USD over last 30 days                    |
| `buyVolume1d`                                      | *number*                                           | :heavy_minus_sign:                                 | Buy volume (USD) last 24h                          |
| `buyVolume7d`                                      | *number*                                           | :heavy_minus_sign:                                 | Buy volume (USD) last 7d                           |
| `buyVolume30d`                                     | *number*                                           | :heavy_minus_sign:                                 | Buy volume (USD) last 30d                          |
| `sellVolume1d`                                     | *number*                                           | :heavy_minus_sign:                                 | Sell volume (USD) last 24h                         |
| `sellVolume7d`                                     | *number*                                           | :heavy_minus_sign:                                 | Sell volume (USD) last 7d                          |
| `sellVolume30d`                                    | *number*                                           | :heavy_minus_sign:                                 | Sell volume (USD) last 30d                         |
| `trades1d`                                         | *number*                                           | :heavy_minus_sign:                                 | Trade count last 24h                               |
| `trades7d`                                         | *number*                                           | :heavy_minus_sign:                                 | Trade count last 7d                                |
| `trades30d`                                        | *number*                                           | :heavy_minus_sign:                                 | Trade count last 30d                               |
| `buys1d`                                           | *number*                                           | :heavy_minus_sign:                                 | Buy trades last 24h                                |
| `buys7d`                                           | *number*                                           | :heavy_minus_sign:                                 | Buy trades last 7d                                 |
| `buys30d`                                          | *number*                                           | :heavy_minus_sign:                                 | Buy trades last 30d                                |
| `sells1d`                                          | *number*                                           | :heavy_minus_sign:                                 | Sell trades last 24h                               |
| `sells7d`                                          | *number*                                           | :heavy_minus_sign:                                 | Sell trades last 7d                                |
| `sells30d`                                         | *number*                                           | :heavy_minus_sign:                                 | Sell trades last 30d                               |
| `oiChange1d`                                       | *number*                                           | :heavy_minus_sign:                                 | OI change over last 24h (USD)                      |
| `oiChange7d`                                       | *number*                                           | :heavy_minus_sign:                                 | OI change over last 7d (USD)                       |
| `oiChange30d`                                      | *number*                                           | :heavy_minus_sign:                                 | OI change over last 30d (USD)                      |
| `computedAt`                                       | *string*                                           | :heavy_minus_sign:                                 | ISO 8601 timestamp when metrics were last computed |