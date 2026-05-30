# CrossChainDeposit

Hints for funding the deposit wallet from chains other than Base. Use Quote Transfer with `from: "external"` to get a signed transaction your end user submits.

## Example Usage

```typescript
import { CrossChainDeposit } from "@predexon/sdk/models/trading";

let value: CrossChainDeposit = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `supportedChains`                                                   | [trading.SupportedChain](../../models/trading/supported-chain.md)[] | :heavy_minus_sign:                                                  | N/A                                                                 |
| `instructions`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | Free-form copy partners can display to depositors.                  |