# OpinionMarket

Opinion market response model.

## Example Usage

```typescript
import { OpinionMarket } from "@predexon/sdk/models/data";

let value: OpinionMarket = {
  marketId: 205949,
  title: "<value>",
  slug: "<value>",
  status: "<value>",
  outcomes: [
    {
      label: "<value>",
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `marketId`                                                        | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `title`                                                           | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `slug`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `description`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `status`                                                          | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `outcomes`                                                        | [data.OpinionOutcome](../../models/data/opinion-outcome.md)[]     | :heavy_check_mark:                                                | N/A                                                               |
| `totalVolumeUsd`                                                  | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `volume24hUsd`                                                    | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `volume7dUsd`                                                     | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `conditionId`                                                     | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `questionId`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `resultTokenId`                                                   | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `eventId`                                                         | *number*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `eventSlug`                                                       | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `eventTitle`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `labels`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | N/A                                                               |
| `thumbnailUrl`                                                    | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `chainId`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `quoteToken`                                                      | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `collection`                                                      | [data.OpinionCollection](../../models/data/opinion-collection.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `createdTime`                                                     | *string*                                                          | :heavy_minus_sign:                                                | ISO 8601 timestamp                                                |
| `cutoffTime`                                                      | *string*                                                          | :heavy_minus_sign:                                                | ISO 8601 timestamp                                                |
| `resolvedTime`                                                    | *string*                                                          | :heavy_minus_sign:                                                | ISO 8601 timestamp                                                |