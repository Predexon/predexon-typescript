# SearchMarketsResponse

Successful Response

## Example Usage

```typescript
import { SearchMarketsResponse } from "@predexon/sdk/models/operations";

let value: SearchMarketsResponse = {
  query: "trump",
  count: 10,
  venuesSearched: [
    "kalshi",
    "limitless",
    "opinion",
    "polymarket",
    "predict",
  ],
  markets: [
    {
      venue: "polymarket",
      title: "Will Trump acquire Greenland?",
      status: "open",
      price: 0.28,
      volume: 32541564.57,
      marketSlug: "will-trump-acquire-greenland",
      predexonId: "px-abc123def456",
      endTime: new Date("2026-12-31T00:00:00+00:00"),
    },
    {
      venue: "kalshi",
      title: "Will Trump buy Greenland?",
      status: "open",
      price: 0.28,
      volume: 33047.86,
      marketId: "KXGREENLAND-29",
      endTime: new Date("2029-01-20T15:00:00+00:00"),
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `query`                                                             | *string*                                                            | :heavy_check_mark:                                                  | The search query that was executed                                  |
| `count`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Number of markets returned                                          |
| `venuesSearched`                                                    | *string*[]                                                          | :heavy_check_mark:                                                  | Venues included in the search (sorted alphabetically)               |
| `markets`                                                           | [operations.Market](../../models/operations/market.md)[]            | :heavy_check_mark:                                                  | Interleaved results across venues. Null fields are omitted per-row. |