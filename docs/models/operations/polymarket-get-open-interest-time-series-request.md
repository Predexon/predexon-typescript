# PolymarketGetOpenInterestTimeSeriesRequest

## Example Usage

```typescript
import { PolymarketGetOpenInterestTimeSeriesRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetOpenInterestTimeSeriesRequest = {
  conditionId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conditionId`                                                | *string*                                                     | :heavy_check_mark:                                           | Condition ID for the market                                  |
| `granularity`                                                | [data.PnLGranularity](../../models/data/pn-l-granularity.md) | :heavy_minus_sign:                                           | Time granularity                                             |
| `startTime`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for start                           |
| `endTime`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for end                             |