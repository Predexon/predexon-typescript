# TxHashes

On-chain transaction hashes for each step that fired. Most routes use only `source`/`dest` (sometimes `approve`); venue-specific routes add `wrap`/`unwrap` (Polymarket), `safeExtract`/`safeDeposit` (Opinion), or `swap` (cross-token routes).

## Example Usage

```typescript
import { TxHashes } from "@predexon/sdk/models/trading";

let value: TxHashes = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `source`           | *string*           | :heavy_minus_sign: | N/A                |
| `dest`             | *string*           | :heavy_minus_sign: | N/A                |
| `approve`          | *string*           | :heavy_minus_sign: | N/A                |
| `unwrap`           | *string*           | :heavy_minus_sign: | N/A                |
| `wrap`             | *string*           | :heavy_minus_sign: | N/A                |
| `safeExtract`      | *string*           | :heavy_minus_sign: | N/A                |
| `safeDeposit`      | *string*           | :heavy_minus_sign: | N/A                |
| `swap`             | *string*           | :heavy_minus_sign: | N/A                |