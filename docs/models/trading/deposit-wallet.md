# DepositWallet

The account's central deposit wallet — a Base USDC address that funds every venue except Hyperliquid. The address + chain/token info is returned inline so you don't need a second call; for cross-chain deposit guidance (supported source chains, intake addresses), use `GET /deposit-info`. Always present on accounts with a provisioned signing wallet.

## Example Usage

```typescript
import { DepositWallet } from "@predexon/sdk/models/trading";

let value: DepositWallet = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `address`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | On-chain wallet address. Send USDC on Base here.                   |
| `chain`                                                            | [trading.AccountChain](../../models/trading/account-chain.md)      | :heavy_minus_sign:                                                 | N/A                                                                |
| `chainId`                                                          | [trading.AccountChainId](../../models/trading/account-chain-id.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `token`                                                            | [trading.AccountToken](../../models/trading/account-token.md)      | :heavy_minus_sign:                                                 | N/A                                                                |
| `tokenAddress`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | USDC contract address on Base.                                     |