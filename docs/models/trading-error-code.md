# TradingErrorCode

Stable machine-readable error code returned in `ApiError.error`. Snake_case, never renamed once shipped. Forward-compatible — new codes may be added over time.

## Example Usage

```typescript
import { TradingErrorCode } from "@predexon/sdk/models";

let value: TradingErrorCode = "upstream_error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"validation_error" | "missing_field" | "invalid_field" | "invalid_amount" | "parse_error" | "unauthorized" | "invalid_api_key" | "forbidden" | "account_not_owned" | "account_not_found" | "order_not_found" | "transfer_not_found" | "endpoint_not_found" | "conflict" | "nonce_replay" | "insufficient_balance" | "min_notional_not_met" | "amount_below_minimum" | "predexon_not_routable" | "router_unavailable" | "no_allocations" | "limit_no_eligible_venue" | "slippage_below_floor" | "slippage_too_high" | "unsupported_route_v1" | "same_endpoint" | "withdraw_via_deposit" | "inbound_requires_quote" | "hyperliquid_uses_across" | "bridge_failed" | "payload_too_large" | "rate_limited" | "internal_error" | "upstream_timeout" | "upstream_error" | Unrecognized<string>
```