# PolymarketGetVolumeTimeSeriesRequest

## Example Usage

```typescript
import { PolymarketGetVolumeTimeSeriesRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetVolumeTimeSeriesRequest = {
  tokenId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `tokenId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Token ID for the market                                      |
| `granularity`                                                | [data.PnLGranularity](../../models/data/pn-l-granularity.md) | :heavy_minus_sign:                                           | Time granularity                                             |
| `startTime`                                                  | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for start                           |
| `endTime`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Unix timestamp (seconds) for end                             |