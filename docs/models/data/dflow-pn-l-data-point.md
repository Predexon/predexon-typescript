# DflowPnLDataPoint

Individual dflow PnL data point.

## Example Usage

```typescript
import { DflowPnLDataPoint } from "@predexon/sdk/models/data";

let value: DflowPnLDataPoint = {
  timestamp: 226088,
  pnlToDate: 1763.39,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `timestamp`                     | *number*                        | :heavy_check_mark:              | Unix timestamp in seconds       |
| `pnlToDate`                     | *number*                        | :heavy_check_mark:              | Cumulative realized PnL to date |