import { NextResponse } from "next/server";

const TOKEN_ADDRESS = "CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E";
const POOL_ADDRESS = "GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL";

export async function GET() {
  try {
    // Fetch token info from Jupiter
    const tokenRes = await fetch(`https://lite-api.jup.ag/tokens/v2/search?query=${TOKEN_ADDRESS}`, {
      headers: { Accept: "application/json" },
    });
    const tokenData = await tokenRes.json();
    const token = tokenData?.[0];

    // Try to fetch pool information from Raydium API
    let poolInfo = null;
    let lockedTokens = 0;

    try {
      const poolRes = await fetch(`https://api.raydium.io/v2/ammV3/ammPools`);
      const poolData = await poolRes.json();

      // Find our specific pool
      const ourPool = poolData.data?.find(
        (pool: { id: string; mintA: string; mintB: string; tvlA?: number; tvlB?: number }) =>
          pool.id === POOL_ADDRESS || pool.mintA === TOKEN_ADDRESS || pool.mintB === TOKEN_ADDRESS
      );

      if (ourPool) {
        poolInfo = ourPool;
        // Calculate locked tokens (this might need adjustment based on the actual API response structure)
        if (ourPool.mintA === TOKEN_ADDRESS) {
          lockedTokens = Number(ourPool.tvlA || 0);
        } else if (ourPool.mintB === TOKEN_ADDRESS) {
          lockedTokens = Number(ourPool.tvlB || 0);
        }
      }
    } catch (poolError) {
      console.warn("Could not fetch pool info:", poolError);
    }

    // Alternative: Try DexScreener API for pool information
    if (!poolInfo || lockedTokens === 0) {
      try {
        const dexRes = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_ADDRESS}`);
        const dexData = await dexRes.json();

        if (dexData.pairs && dexData.pairs.length > 0) {
          const pair = dexData.pairs[0];
          // Estimate locked tokens from liquidity data
          if (pair.baseToken?.address === TOKEN_ADDRESS) {
            lockedTokens = Number(pair.liquidity?.base || 0);
          } else if (pair.quoteToken?.address === TOKEN_ADDRESS) {
            lockedTokens = Number(pair.liquidity?.quote || 0);
          }
        }
      } catch (dexError) {
        console.warn("Could not fetch DexScreener info:", dexError);
      }
    }

    return NextResponse.json({
      meta: {
        symbol: token?.symbol || "N/A",
        name: token?.name || "N/A",
        supply: token?.totalSupply ? Number(token.totalSupply).toFixed(0) : "N/A",
        circSupply: token?.circSupply ? Number(token.circSupply).toFixed(0) : "N/A",
        lockedTokens: lockedTokens > 0 ? lockedTokens.toFixed(0) : "N/A",
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
      pool: {
        address: POOL_ADDRESS,
        lockedTokens: lockedTokens > 0 ? lockedTokens.toFixed(0) : "N/A",
        info: poolInfo,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch token info" }, { status: 500 });
  }
}
