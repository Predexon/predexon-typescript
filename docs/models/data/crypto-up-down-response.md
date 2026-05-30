# CryptoUpDownResponse

Response for crypto up/down markets list endpoint.

## Example Usage

```typescript
import { CryptoUpDownResponse } from "@predexon/sdk/models/data";

let value: CryptoUpDownResponse = {
  markets: [],
  pagination: {
    limit: 883775,
    offset: 721952,
    total: 373436,
    hasMore: true,
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `markets`                                                               | [data.CryptoUpDownMarket](../../models/data/crypto-up-down-market.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |
| `pagination`                                                            | [data.OffsetPagination](../../models/data/offset-pagination.md)         | :heavy_check_mark:                                                      | Offset-based pagination for markets list endpoints.                     |