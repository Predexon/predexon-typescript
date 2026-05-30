# LimitlessOrderbookLevel

Single price level in Limitless orderbook.

## Example Usage

```typescript
import { LimitlessOrderbookLevel } from "@predexon/sdk/models/data";

let value: LimitlessOrderbookLevel = {
  price: 6965.93,
  size: 4628.3,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `price`                  | *number*                 | :heavy_check_mark:       | Price level (0-1 range)  |
| `size`                   | *number*                 | :heavy_check_mark:       | Size at this price level |