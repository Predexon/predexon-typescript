# PolymarketGetCandlesticksRequest

## Example Usage

```typescript
import { PolymarketGetCandlesticksRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetCandlesticksRequest = {
  conditionId: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `conditionId`                                        | *string*                                             | :heavy_check_mark:                                   | Condition ID for the market                          |
| `startTime`                                          | *number*                                             | :heavy_minus_sign:                                   | Unix timestamp (seconds) for start of time range     |
| `endTime`                                            | *number*                                             | :heavy_minus_sign:                                   | Unix timestamp (seconds) for end of time range       |
| `interval`                                           | *number*                                             | :heavy_minus_sign:                                   | Interval: 0=auto, 1=1m, 5=5m, 15=15m, 60=1h, 1440=1d |