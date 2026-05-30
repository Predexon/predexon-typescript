# KalshiTrade

Kalshi trade model.

## Example Usage

```typescript
import { KalshiTrade } from "@predexon/sdk/models/data";

let value: KalshiTrade = {
  tradeId: "<id>",
  ticker: "<value>",
  count: 843677,
  yesPrice: 7946.65,
  noPrice: 4589.02,
  takerSide: "no",
  createdTime: 955540,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `tradeId`                                                      | *string*                                                       | :heavy_check_mark:                                             | Unique trade identifier                                        |
| `ticker`                                                       | *string*                                                       | :heavy_check_mark:                                             | Market ticker                                                  |
| `count`                                                        | *number*                                                       | :heavy_check_mark:                                             | Number of contracts traded                                     |
| `yesPrice`                                                     | *number*                                                       | :heavy_check_mark:                                             | Yes price (0-1)                                                |
| `noPrice`                                                      | *number*                                                       | :heavy_check_mark:                                             | No price (0-1)                                                 |
| `takerSide`                                                    | [data.KalshiTakerSide](../../models/data/kalshi-taker-side.md) | :heavy_check_mark:                                             | Kalshi taker side enum.                                        |
| `createdTime`                                                  | *number*                                                       | :heavy_check_mark:                                             | Unix timestamp in seconds                                      |