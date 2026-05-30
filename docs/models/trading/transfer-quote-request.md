# TransferQuoteRequest

Preview a transfer before executing. Accepts a superset of `CreateTransferRequest` — outbound quotes use the same shape; inbound quotes (`from: "external"`) carry a `source` object describing the partner's external wallet.

## Example Usage

```typescript
import { TransferQuoteRequest } from "@predexon/sdk/models/trading";

let value: TransferQuoteRequest = {
  from: "polymarket",
  to: "external",
  amount: "281.76",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                                   | [trading.TransferQuoteRequestFrom](../../models/trading/transfer-quote-request-from.md)                                  | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `to`                                                                                                                     | [trading.TransferQuoteRequestTo](../../models/trading/transfer-quote-request-to.md)                                      | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `amount`                                                                                                                 | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `source`                                                                                                                 | [trading.Source](../../models/trading/source.md)                                                                         | :heavy_minus_sign:                                                                                                       | Required when `from === "external"`. Partner's external wallet — the address the bridge transaction will be signed from. |
| `destination`                                                                                                            | [trading.TransferQuoteRequestDestination](../../models/trading/transfer-quote-request-destination.md)                    | :heavy_minus_sign:                                                                                                       | Required when `to === "external"`.                                                                                       |