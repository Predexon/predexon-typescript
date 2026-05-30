# BuilderMarketsResponse

Response for builder top-markets endpoint.

## Example Usage

```typescript
import { BuilderMarketsResponse } from "@predexon/sdk/models/data";

let value: BuilderMarketsResponse = {
  builderCode: "<value>",
  window: "<value>",
  entries: [
    {
      rank: 523829,
      conditionId: "<id>",
      volumeUsd: 4443.9,
      builderFeeUsd: 2045.95,
      tradeCount: 221508,
      uniqueTraders: 437706,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `builderCode`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `window`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `entries`                                                              | [data.BuilderMarketEntry](../../models/data/builder-market-entry.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |