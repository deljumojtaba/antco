import { NextResponse } from "next/server";

const TOKEN_ADDRESS = "CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E";

export async function GET() {
  try {
    const res = await fetch(`https://lite-api.jup.ag/tokens/v2/search?query=${TOKEN_ADDRESS}`, {
      headers: { Accept: "application/json" },
    });
    const data = await res.json();
    const token = data?.[0];

    return NextResponse.json({
      meta: {
        symbol: token?.symbol || "N/A",
        name: token?.name || "N/A",
        supply: token?.totalSupply ? Number(token.totalSupply).toFixed(0) : "N/A",
        circSupply: token?.circSupply ? Number(token.circSupply).toFixed(0) : "N/A",
        decimals: token?.decimals || "N/A",
        holderCount: token?.holderCount || "N/A",
        website: token?.website || "N/A",
        icon: token?.icon || "N/A",
      },
      price: {
        priceUsdt: token?.usdPrice || "N/A",
        fdv: token?.fdv || "N/A",
        mcap: token?.mcap || "N/A",
        liquidity: token?.liquidity || "N/A",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch token info" }, { status: 500 });
  }
}
