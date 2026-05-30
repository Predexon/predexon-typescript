# LeaderboardSortBy

Sort options for leaderboard.

## Example Usage

```typescript
import { LeaderboardSortBy } from "@predexon/sdk/models/data";

let value: LeaderboardSortBy = "profit_factor";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"realized_pnl" | "total_pnl" | "volume" | "roi" | "profit_factor" | "win_rate" | "trades" | Unrecognized<string>
```