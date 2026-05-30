# KalshiListMarketsRequest

## Example Usage

```typescript
import { KalshiListMarketsRequest } from "@predexon/sdk/models/operations";

let value: KalshiListMarketsRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `status`                                                                        | [data.StatusOption](../../models/data/status-option.md)                         | :heavy_minus_sign:                                                              | Filter by status: open or closed                                                |
| `minPrice`                                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | Minimum last price (0-100)                                                      |
| `maxPrice`                                                                      | *number*                                                                        | :heavy_minus_sign:                                                              | Maximum last price (0-100)                                                      |
| `minOpenInterest`                                                               | *number*                                                                        | :heavy_minus_sign:                                                              | Minimum dollar open interest                                                    |
| `minVolume`                                                                     | *number*                                                                        | :heavy_minus_sign:                                                              | Minimum dollar volume                                                           |
| `search`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Search in title (minimum 3 characters)                                          |
| `ticker`                                                                        | *string*[]                                                                      | :heavy_minus_sign:                                                              | Filter by ticker(s)                                                             |
| `eventTicker`                                                                   | *string*[]                                                                      | :heavy_minus_sign:                                                              | Filter by event ticker(s)                                                       |
| `seriesTicker`                                                                  | *string*[]                                                                      | :heavy_minus_sign:                                                              | Filter by series ticker(s)                                                      |
| `predexonId`                                                                    | *string*[]                                                                      | :heavy_minus_sign:                                                              | Filter by predexon ID(s)                                                        |
| `sort`                                                                          | [data.KalshiMarketsSortOption](../../models/data/kalshi-markets-sort-option.md) | :heavy_minus_sign:                                                              | Sort by                                                                         |
| `limit`                                                                         | *number*                                                                        | :heavy_minus_sign:                                                              | Number of markets to return                                                     |
| `paginationKey`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | Cursor for next page (from previous response)                                   |