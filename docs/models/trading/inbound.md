# Inbound

Populated only for inbound quotes (`from === "external"`). The partner submits `transactionRequest` from their own wallet after granting the `approvalTarget` allowance.

## Example Usage

```typescript
import { Inbound } from "@predexon/sdk/models/trading";

let value: Inbound = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `transactionRequest`                                                               | [trading.TransactionRequest](../../models/trading/transaction-request.md)          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `approvalTarget`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | Address the source token must be approved against before submitting the bridge tx. |
| `explorerLinkTemplate`                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Substitute `{source_tx_hash}` after submitting to track progress.                  |