# CreateTransferRequest

Move funds between the account's deposit wallet, a venue trading wallet, or an external address. Supported routes today: `deposit ↔ <venue>` (fund / drain a venue), `deposit → external` (withdraw). See the Transfers guide for the full route matrix.

## Example Usage

```typescript
import { CreateTransferRequest } from "@predexon/sdk/models/trading";

let value: CreateTransferRequest = {
  from: "polymarket",
  to: "predict",
  amount: "154.74",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `from`                                                                                                                               | [trading.CreateTransferRequestFrom](../../models/trading/create-transfer-request-from.md)                                            | :heavy_check_mark:                                                                                                                   | Source wallet. `deposit` is the account's Base USDC deposit wallet; venue values are the account's venue trading wallets.            |
| `to`                                                                                                                                 | [trading.CreateTransferRequestTo](../../models/trading/create-transfer-request-to.md)                                                | :heavy_check_mark:                                                                                                                   | Destination wallet. `external` is a partner-supplied address — see `destination`.                                                    |
| `amount`                                                                                                                             | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Amount in the source token's natural unit (USDC for `deposit` source; USDT/pUSD for venue sources). Decimal string, e.g. `"100.00"`. |
| `destination`                                                                                                                        | [trading.CreateTransferRequestDestination](../../models/trading/create-transfer-request-destination.md)                              | :heavy_minus_sign:                                                                                                                   | Required when `to === "external"`. Recipient address + delivery chain/token.                                                         |
| `clientReferenceId`                                                                                                                  | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Partner-supplied idempotency key. Retries with the same key return the existing transfer rather than creating a duplicate.           |