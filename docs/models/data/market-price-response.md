# MarketPriceResponse

Market price endpoint response.

## Example Usage

```typescript
import { MarketPriceResponse } from "@predexon/sdk/models/data";

let value: MarketPriceResponse = {
  price: 3915.34,
  atTime: 685648,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `price`                   | *number*                  | :heavy_check_mark:        | N/A                       |
| `atTime`                  | *number*                  | :heavy_check_mark:        | Unix timestamp in seconds |