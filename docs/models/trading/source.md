# Source

Required when `from === "external"`. Partner's external wallet — the address the bridge transaction will be signed from.

## Example Usage

```typescript
import { Source } from "@predexon/sdk/models/trading";

let value: Source = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `address`                                                   | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `chain`                                                     | [trading.SourceChain](../../models/trading/source-chain.md) | :heavy_minus_sign:                                          | N/A                                                         |
| `token`                                                     | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |