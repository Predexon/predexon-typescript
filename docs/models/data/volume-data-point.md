# VolumeDataPoint

Individual volume data point.

## Example Usage

```typescript
import { VolumeDataPoint } from "@predexon/sdk/models/data";

let value: VolumeDataPoint = {
  timestamp: 102061,
  volume: 6996.29,
  buyVolume: 6705.56,
  sellVolume: 471.69,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `timestamp`                             | *number*                                | :heavy_check_mark:                      | Unix timestamp in seconds               |
| `volume`                                | *number*                                | :heavy_check_mark:                      | Cumulative volume up to this point      |
| `buyVolume`                             | *number*                                | :heavy_check_mark:                      | Cumulative buy volume up to this point  |
| `sellVolume`                            | *number*                                | :heavy_check_mark:                      | Cumulative sell volume up to this point |