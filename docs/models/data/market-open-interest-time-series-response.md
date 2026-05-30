# MarketOpenInterestTimeSeriesResponse

Market open interest time series endpoint response.

## Example Usage

```typescript
import { MarketOpenInterestTimeSeriesResponse } from "@predexon/sdk/models/data";

let value: MarketOpenInterestTimeSeriesResponse = {
  conditionId: "<id>",
  granularity: "year",
  startTime: 358084,
  endTime: 129901,
  openInterestOverTime: [],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `conditionId`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `marketId`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Market ID                                                                     |
| `granularity`                                                                 | [data.PnLGranularity](../../models/data/pn-l-granularity.md)                  | :heavy_check_mark:                                                            | PnL granularity enum.                                                         |
| `startTime`                                                                   | *number*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `endTime`                                                                     | *number*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `openInterestOverTime`                                                        | [data.OpenInterestDataPoint](../../models/data/open-interest-data-point.md)[] | :heavy_check_mark:                                                            | N/A                                                                           |