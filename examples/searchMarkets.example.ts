import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the @predexon/sdk SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx searchMarkets.example.ts
 */

import { Predexon } from "@predexon/sdk";

const predexon = new Predexon({
  security: {
    dataApiKey: process.env["PREDEXON_DATA_API_KEY"] ?? "",
  },
});

async function main() {
  const result = await predexon.search.markets({
    q: "trump",
    venue: "polymarket,kalshi",
  });

  console.log(result);
}

main().catch(console.error);
