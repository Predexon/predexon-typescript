# TradingStyleFlags

Multi-label trading style classification.

## Example Usage

```typescript
import { TradingStyleFlags } from "@predexon/sdk/models/data";

let value: TradingStyleFlags = {
  isWhale: false,
  isMarketMaker: true,
  isActiveTrader: true,
  isBuyAndHold: false,
  isDegen: true,
  isHighConviction: true,
  isContrarian: true,
  isValueHunter: false,
  primaryStyle: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `isWhale`                                      | *boolean*                                      | :heavy_check_mark:                             | Large position trader (avg trade > $1000)      |
| `isMarketMaker`                                | *boolean*                                      | :heavy_check_mark:                             | Balanced buy/sell + frequent trading           |
| `isActiveTrader`                               | *boolean*                                      | :heavy_check_mark:                             | High trade frequency (>4 trades/position)      |
| `isBuyAndHold`                                 | *boolean*                                      | :heavy_check_mark:                             | Long holding periods (<=2 trades/position)     |
| `isDegen`                                      | *boolean*                                      | :heavy_check_mark:                             | High-risk pattern (win rate < 35%, 50+ closes) |
| `isHighConviction`                             | *boolean*                                      | :heavy_check_mark:                             | Buys at high YES prices (>=0.80)               |
| `isContrarian`                                 | *boolean*                                      | :heavy_check_mark:                             | Takes unpopular sides (<=0.25)                 |
| `isValueHunter`                                | *boolean*                                      | :heavy_check_mark:                             | Enters at uncertain odds (0.35-0.55)           |
| `primaryStyle`                                 | *string*                                       | :heavy_check_mark:                             | Primary trading style classification           |