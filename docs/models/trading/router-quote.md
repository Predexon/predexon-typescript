# RouterQuote

## Example Usage

```typescript
import { RouterQuote } from "@predexon/sdk/models/trading";

let value: RouterQuote = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `predexonId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `title`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `outcome`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `side`                                                                     | [trading.RouterQuoteSide](../../models/trading/router-quote-side.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `requestedAmount`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `requestedSize`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `venues`                                                                   | [trading.RouterQuoteVenue](../../models/trading/router-quote-venue.md)[]   | :heavy_minus_sign:                                                         | Per-venue projection. Only venues with a current quote are listed.         |
| `summary`                                                                  | [trading.RouterQuoteSummary](../../models/trading/router-quote-summary.md) | :heavy_minus_sign:                                                         | N/A                                                                        |