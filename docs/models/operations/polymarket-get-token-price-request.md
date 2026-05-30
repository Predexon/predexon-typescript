# PolymarketGetTokenPriceRequest

## Example Usage

```typescript
import { PolymarketGetTokenPriceRequest } from "@predexon/sdk/models/operations";

let value: PolymarketGetTokenPriceRequest = {
  tokenId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `tokenId`                                     | *string*                                      | :heavy_check_mark:                            | Token ID for the market                       |
| `atTime`                                      | *number*                                      | :heavy_minus_sign:                            | Unix timestamp (seconds) for historical price |