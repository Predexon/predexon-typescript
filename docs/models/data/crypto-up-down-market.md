# CryptoUpDownMarket

A crypto up/down market (e.g., 'Bitcoin Up or Down - 15m').

## Example Usage

```typescript
import { CryptoUpDownMarket } from "@predexon/sdk/models/data";

let value: CryptoUpDownMarket = {
  conditionId: "<id>",
  marketSlug: "<value>",
  title: "<value>",
  asset: "<value>",
  timeframe: "<value>",
  status: "<value>",
  upTokenId: "<id>",
  downTokenId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `conditionId`                             | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `marketSlug`                              | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `title`                                   | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `asset`                                   | *string*                                  | :heavy_check_mark:                        | Normalized asset code: btc, eth, sol, xrp |
| `timeframe`                               | *string*                                  | :heavy_check_mark:                        | Normalized timeframe: 15m, 1h, 4h, daily  |
| `status`                                  | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `winningSide`                             | *string*                                  | :heavy_minus_sign:                        | 'Up', 'Down', or null if unresolved       |
| `upPrice`                                 | *number*                                  | :heavy_minus_sign:                        | Current Up outcome price (0-1)            |
| `downPrice`                               | *number*                                  | :heavy_minus_sign:                        | Current Down outcome price (0-1)          |
| `upTokenId`                               | *string*                                  | :heavy_check_mark:                        | Token ID for the Up outcome               |
| `downTokenId`                             | *string*                                  | :heavy_check_mark:                        | Token ID for the Down outcome             |
| `startTime`                               | *string*                                  | :heavy_minus_sign:                        | ISO 8601 timestamp                        |
| `endTime`                                 | *string*                                  | :heavy_minus_sign:                        | ISO 8601 timestamp                        |
| `totalVolumeUsd`                          | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `liquidityUsd`                            | *number*                                  | :heavy_minus_sign:                        | N/A                                       |
| `eventSlug`                               | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `imageUrl`                                | *string*                                  | :heavy_minus_sign:                        | N/A                                       |