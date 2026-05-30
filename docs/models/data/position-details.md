# PositionDetails

Position size and cost basis.

## Example Usage

```typescript
import { PositionDetails } from "@predexon/sdk/models/data";

let value: PositionDetails = {
  shares: 1241.09,
  totalSharesBought: 128.58,
  avgEntryPrice: 771.06,
  totalCostUsd: 3009.97,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `shares`                                                       | *number*                                                       | :heavy_check_mark:                                             | Number of shares currently held (0 for closed positions)       |
| `totalSharesBought`                                            | *number*                                                       | :heavy_check_mark:                                             | Total shares ever purchased (preserved even after redemption)  |
| `avgEntryPrice`                                                | *number*                                                       | :heavy_check_mark:                                             | Average entry price (0-1)                                      |
| `totalCostUsd`                                                 | *number*                                                       | :heavy_check_mark:                                             | Total cost basis in USD                                        |
| `netFeesUsd`                                                   | *number*                                                       | :heavy_minus_sign:                                             | Net taker fees for this position (charged minus refunded, USD) |