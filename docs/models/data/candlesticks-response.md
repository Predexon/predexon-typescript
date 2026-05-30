# CandlesticksResponse

Candlesticks endpoint response.

## Example Usage

```typescript
import { CandlesticksResponse } from "@predexon/sdk/models/data";

let value: CandlesticksResponse = {
  interval: 589617,
  intervalSeconds: 891261,
  candlesticks: [
    {
      endPeriodTs: 322320,
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
      volume: 2809.95,
      tradesCount: 327749,
    },
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `conditionId`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Market condition ID (set for condition-level candles)                                                                       |
| `tokenId`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Outcome token ID (set for token-level candles)                                                                              |
| `firstTradeTs`                                                                                                              | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Unix timestamp of the first trade                                                                                           |
| `lastTradeTs`                                                                                                               | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Unix timestamp of the last trade                                                                                            |
| `interval`                                                                                                                  | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | Resolved candle interval in minutes (1, 5, 15, 60, or 1440). Reflects the auto-selected value when interval=0 is requested. |
| `intervalSeconds`                                                                                                           | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | Resolved candle interval in seconds — the bucket width of each candlestick                                                  |
| `candlesticks`                                                                                                              | [data.CandlestickData](../../models/data/candlestick-data.md)[]                                                             | :heavy_check_mark:                                                                                                          | Array of candlestick data points                                                                                            |