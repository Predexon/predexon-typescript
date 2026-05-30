# PositionMarketInfo

Market info for a position.

## Example Usage

```typescript
import { PositionMarketInfo } from "@predexon/sdk/models/data";

let value: PositionMarketInfo = {
  conditionId: "<id>",
  marketSlug: "<value>",
  title: "<value>",
  side: "YES",
  sideLabel: "<value>",
  tokenId: "<id>",
  status: "open",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `conditionId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `marketSlug`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `title`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `side`                                                                   | [data.PositionSide](../../models/data/position-side.md)                  | :heavy_check_mark:                                                       | Position side (YES/NO).                                                  |
| `sideLabel`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Human-readable outcome label (e.g., 'Trump wins' instead of 'Yes')       |
| `tokenId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `status`                                                                 | [data.PositionMarketStatus](../../models/data/position-market-status.md) | :heavy_check_mark:                                                       | Market status for a position.                                            |