# PriceData

Price data within candlestick.

## Example Usage

```typescript
import { PriceData } from "@predexon/sdk/models/data";

let value: PriceData = {
  open: 8420.31,
  high: 5044.71,
  low: 4203.47,
  close: 2146.79,
  openDollars: "<value>",
  highDollars: "<value>",
  lowDollars: "<value>",
  closeDollars: "<value>",
  mean: 511.13,
  meanDollars: "<value>",
  previous: 4494.62,
  previousDollars: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `open`             | *number*           | :heavy_check_mark: | N/A                |
| `high`             | *number*           | :heavy_check_mark: | N/A                |
| `low`              | *number*           | :heavy_check_mark: | N/A                |
| `close`            | *number*           | :heavy_check_mark: | N/A                |
| `openDollars`      | *string*           | :heavy_check_mark: | N/A                |
| `highDollars`      | *string*           | :heavy_check_mark: | N/A                |
| `lowDollars`       | *string*           | :heavy_check_mark: | N/A                |
| `closeDollars`     | *string*           | :heavy_check_mark: | N/A                |
| `mean`             | *number*           | :heavy_check_mark: | N/A                |
| `meanDollars`      | *string*           | :heavy_check_mark: | N/A                |
| `previous`         | *number*           | :heavy_check_mark: | N/A                |
| `previousDollars`  | *string*           | :heavy_check_mark: | N/A                |