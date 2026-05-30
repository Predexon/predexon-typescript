# BinanceInterval

Candlestick intervals aligned with crypto up/down market timeframes.

- 1s, 1m: high-resolution data from pre-aggregated tables
- 5m, 15m, 1h, 4h, 1d: aggregated on-the-fly from 1m candles

## Example Usage

```typescript
import { BinanceInterval } from "@predexon/sdk/models/data";

let value: BinanceInterval = "1h";
```

## Values

```typescript
"1s" | "1m" | "5m" | "15m" | "1h" | "4h" | "1d"
```