# PolymarketEvent

Polymarket event in list response.

## Example Usage

```typescript
import { PolymarketEvent } from "@predexon/sdk/models/data";

let value: PolymarketEvent = {
  id: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `ticker`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `slug`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `title`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `description`                                | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `category`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `tags`                                       | [data.Tag](../../models/data/tag.md)[]       | :heavy_minus_sign:                           | N/A                                          |
| `series`                                     | [data.Series](../../models/data/series.md)[] | :heavy_minus_sign:                           | N/A                                          |
| `imageUrl`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `iconUrl`                                    | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `resolutionSource`                           | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `startDate`                                  | *string*                                     | :heavy_minus_sign:                           | ISO 8601 timestamp                           |
| `endDate`                                    | *string*                                     | :heavy_minus_sign:                           | ISO 8601 timestamp                           |
| `creationDate`                               | *string*                                     | :heavy_minus_sign:                           | ISO 8601 timestamp                           |
| `closedTime`                                 | *string*                                     | :heavy_minus_sign:                           | ISO 8601 timestamp                           |
| `negRisk`                                    | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `negRiskMarketId`                            | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `enableOrderBook`                            | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `status`                                     | *string*                                     | :heavy_minus_sign:                           | N/A                                          |