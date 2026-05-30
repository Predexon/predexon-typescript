# PredictMarket

Predict.fun market response model.

## Example Usage

```typescript
import { PredictMarket } from "@predexon/sdk/models/data";

let value: PredictMarket = {
  marketId: 372270,
  title: "<value>",
  status: "<value>",
  outcomes: [],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `marketId`                                                    | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `conditionId`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `title`                                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `status`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `marketVariant`                                               | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `outcomes`                                                    | [data.PredictOutcome](../../models/data/predict-outcome.md)[] | :heavy_check_mark:                                            | N/A                                                           |
| `bestBid`                                                     | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `bestAsk`                                                     | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `bidDepth`                                                    | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `askDepth`                                                    | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `isYieldBearing`                                              | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |
| `isNegRisk`                                                   | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |
| `eventSlug`                                                   | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `imageUrl`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `winningOutcome`                                              | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `payoutNumerators`                                            | *number*[]                                                    | :heavy_minus_sign:                                            | N/A                                                           |
| `resolutionBlock`                                             | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `resolutionTx`                                                | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `createdTime`                                                 | *string*                                                      | :heavy_minus_sign:                                            | ISO 8601 timestamp                                            |
| `updatedTime`                                                 | *string*                                                      | :heavy_minus_sign:                                            | ISO 8601 timestamp                                            |