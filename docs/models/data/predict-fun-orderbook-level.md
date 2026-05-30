# PredictFunOrderbookLevel

Single price level in PredictFun orderbook.

## Example Usage

```typescript
import { PredictFunOrderbookLevel } from "@predexon/sdk/models/data";

let value: PredictFunOrderbookLevel = {
  price: 8225.27,
  size: 309.92,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `price`                  | *number*                 | :heavy_check_mark:       | Price level (0-1 range)  |
| `size`                   | *number*                 | :heavy_check_mark:       | Size at this price level |