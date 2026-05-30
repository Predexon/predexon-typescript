# OrderbookLevel

Single price level in orderbook.

## Example Usage

```typescript
import { OrderbookLevel } from "@predexon/sdk/models/data";

let value: OrderbookLevel = {
  size: 592.6,
  price: 5921.48,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `size`                   | *number*                 | :heavy_check_mark:       | Size at this price level |
| `price`                  | *number*                 | :heavy_check_mark:       | Price level (0-1 range)  |