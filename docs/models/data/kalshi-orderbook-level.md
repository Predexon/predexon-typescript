# KalshiOrderbookLevel

Single price level in Kalshi orderbook.

## Example Usage

```typescript
import { KalshiOrderbookLevel } from "@predexon/sdk/models/data";

let value: KalshiOrderbookLevel = {
  price: 304539,
  size: 269590,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `price`                                 | *number*                                | :heavy_check_mark:                      | Price in cents (1-99)                   |
| `size`                                  | *number*                                | :heavy_check_mark:                      | Number of contracts at this price level |