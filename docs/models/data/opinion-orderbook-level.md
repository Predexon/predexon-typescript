# OpinionOrderbookLevel

Single price level in Opinion orderbook.

## Example Usage

```typescript
import { OpinionOrderbookLevel } from "@predexon/sdk/models/data";

let value: OpinionOrderbookLevel = {
  price: 1318.53,
  size: 2285.42,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `price`                  | *number*                 | :heavy_check_mark:       | Price level (0-1 range)  |
| `size`                   | *number*                 | :heavy_check_mark:       | Size at this price level |