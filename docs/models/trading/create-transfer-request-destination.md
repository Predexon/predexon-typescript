# CreateTransferRequestDestination

Required when `to === "external"`. Recipient address + delivery chain/token.

## Example Usage

```typescript
import { CreateTransferRequestDestination } from "@predexon/sdk/models/trading";

let value: CreateTransferRequestDestination = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `address`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `chain`                                                                                     | [trading.CreateTransferRequestChain](../../models/trading/create-transfer-request-chain.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `token`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Token symbol — `USDC`, `USDT`, or chain-specific (e.g. `USDC.e` on Polygon).                |