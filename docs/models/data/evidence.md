# Evidence

Evidence object — free-form, but typically includes: hops (in/out depths), bidirectional flag, class (wallet classification), is_verified_trader flag, direct_flow array (per-asset amount and tx count), shared_peers (low-degree wallets both seed and sibling transacted with), same_signer / same_x_username identity proofs, shared_first_funder.

## Example Usage

```typescript
import { Evidence } from "@predexon/sdk/models/data";

let value: Evidence = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |