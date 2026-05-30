# CandlestickData

Individual candlestick data.

## Example Usage

```typescript
import { CandlestickData } from "@predexon/sdk/models/data";

let value: CandlestickData = {
  endPeriodTs: 508136,
  price: {
    open: 5112.29,
    high: 8301.29,
    low: 4353.43,
    close: 4099.22,
    openDollars: "<value>",
    highDollars: "<value>",
    lowDollars: "<value>",
    closeDollars: "<value>",
    mean: 7504.79,
    meanDollars: "<value>",
    previous: 2540.84,
    previousDollars: "<value>",
  },
  volume: 3975.87,
  tradesCount: 156271,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `endPeriodTs`                                     | *number*                                          | :heavy_check_mark:                                | N/A                                               |
| `price`                                           | [data.PriceData](../../models/data/price-data.md) | :heavy_check_mark:                                | Price data within candlestick.                    |
| `volume`                                          | *number*                                          | :heavy_check_mark:                                | N/A                                               |
| `tradesCount`                                     | *number*                                          | :heavy_check_mark:                                | N/A                                               |