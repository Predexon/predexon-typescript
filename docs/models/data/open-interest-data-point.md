# OpenInterestDataPoint

Individual open interest data point.

## Example Usage

```typescript
import { OpenInterestDataPoint } from "@predexon/sdk/models/data";

let value: OpenInterestDataPoint = {
  timestamp: 632447,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `timestamp`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | Unix timestamp in seconds                                                                |
| `openInterestUsd`                                                                        | *number*                                                                                 | :heavy_minus_sign:                                                                       | Total value of tokens circulating from split, merge, redeem, and conversion events (USD) |