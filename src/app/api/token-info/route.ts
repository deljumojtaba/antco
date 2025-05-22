import { NextResponse } from "next/server";

const BIRDEYE_API_KEY = process.env.BIRDEYE_API_KEY || ""; // Set this in your .env.local
const TOKEN_ADDRESS = "CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E";

export async function GET() {
  // Birdeye API endpoints
  const metaUrl = `https://public-api.birdeye.so/defi/token_meta?address=${TOKEN_ADDRESS}`;
  const priceUrl = `https://public-api.birdeye.so/defi/price?address=${TOKEN_ADDRESS}`;

  try {
    const headers = {
      "X-API-KEY": BIRDEYE_API_KEY,
      accept: "application/json",
      "x-chain": "solana",
    };
    const [metaRes, priceRes] = await Promise.all([fetch(metaUrl, { headers }), fetch(priceUrl, { headers })]);
    const meta = await metaRes.json();
    const price = await priceRes.json();
    return NextResponse.json({ meta, price });
  } catch {
    return NextResponse.json({ error: "Failed to fetch token data" }, { status: 500 });
  }
}
