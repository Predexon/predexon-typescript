# MarketVolumeTimeSeriesResponse

Market volume time series endpoint response.

## Example Usage

```typescript
import { MarketVolumeTimeSeriesResponse } from "@predexon/sdk/models/data";

let value: MarketVolumeTimeSeriesResponse = {
  tokenId: "<id>",
  granularity: "week",
  startTime: 804252,
  endTime: 701551,
  volumeOverTime: [
    {
      timestamp: 315177,
      volume: 1348.5,
      buyVolume: 2217.01,
      sellVolume: 6290.38,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `tokenId`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `granularity`                                                    | [data.PnLGranularity](../../models/data/pn-l-granularity.md)     | :heavy_check_mark:                                               | PnL granularity enum.                                            |
| `startTime`                                                      | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `endTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `volumeOverTime`                                                 | [data.VolumeDataPoint](../../models/data/volume-data-point.md)[] | :heavy_check_mark:                                               | N/A                                                              |