# SearchMarketsRequest

## Example Usage

```typescript
import { SearchMarketsRequest } from "@predexon/sdk/models/operations";

let value: SearchMarketsRequest = {
  q: "trump",
  venue: "polymarket,kalshi",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                      | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Search query (3-200 chars)                                                                               | trump                                                                                                    |
| `status`                                                                                                 | [operations.SearchMarketsQueryParamStatus](../../models/operations/search-markets-query-param-status.md) | :heavy_minus_sign:                                                                                       | Market status filter                                                                                     |                                                                                                          |
| `venue`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Comma-separated venues to search (e.g. `polymarket,kalshi`). Defaults to all 5.                          | polymarket,kalshi                                                                                        |
| `limit`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Total results to return (1-100)                                                                          |                                                                                                          |