# EnableVenueResponseStatus

`provisioning` on first enable (poll until terminal). `active` on a re-enable of an already-provisioned venue. `failed` if provisioning errored synchronously — read the `message` for the reason and retry.

## Example Usage

```typescript
import { EnableVenueResponseStatus } from "@predexon/sdk/models/trading";

let value: EnableVenueResponseStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"provisioning" | "active" | "failed" | Unrecognized<string>
```