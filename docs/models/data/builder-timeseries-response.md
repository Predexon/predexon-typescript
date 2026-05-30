# BuilderTimeseriesResponse

Response for builder timeseries endpoint.

## Example Usage

```typescript
import { BuilderTimeseriesResponse } from "@predexon/sdk/models/data";

let value: BuilderTimeseriesResponse = {
  builderCode: "<value>",
  window: "<value>",
  bucket: "<value>",
  points: [
    {
      timestamp: 344897,
      volumeUsd: 1362.46,
      builderFeeUsd: 1959.63,
      tradeCount: 933836,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `builderCode`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `window`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `bucket`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | Bucket size: 'day' or 'hour'                                                   |
| `points`                                                                       | [data.BuilderTimeseriesPoint](../../models/data/builder-timeseries-point.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |