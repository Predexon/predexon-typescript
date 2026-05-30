# BuilderFeeRateHistoryEntry

A single (taker_bps, maker_bps) validity window for one builder.

## Example Usage

```typescript
import { BuilderFeeRateHistoryEntry } from "@predexon/sdk/models/data";

let value: BuilderFeeRateHistoryEntry = {
  takerBps: 312941,
  makerBps: 762105,
  validFrom: 821148,
  validTo: 572747,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `takerBps`                                                        | *number*                                                          | :heavy_check_mark:                                                | Taker-leg fee in basis points (0-100)                             |
| `makerBps`                                                        | *number*                                                          | :heavy_check_mark:                                                | Maker-leg fee in basis points (0-50)                              |
| `validFrom`                                                       | *number*                                                          | :heavy_check_mark:                                                | Unix timestamp the rate took effect                               |
| `validTo`                                                         | *number*                                                          | :heavy_check_mark:                                                | Unix timestamp the rate stopped applying (far-future for current) |