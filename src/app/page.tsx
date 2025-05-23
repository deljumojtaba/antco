"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type TokenMeta = {
  symbol?: string;
  name?: string;
  supply?: string | number;
};
type TokenPrice = {
  priceUsdt?: string | number;
};
type TokenData = {
  meta?: TokenMeta;
  price?: TokenPrice;
  error?: string;
};

export default function Home() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/token-info")
      .then((res) => res.json())
      .then((data) => {
        setTokenData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-[#0a0a23] via-[#181830] to-[#1a1a40] text-white p-4 sm:p-8">
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto py-12 gap-10">
        <Image
          src="https://azure-elaborate-narwhal-225.mypinata.cloud/ipfs/bafybeicmbo2og3lhzato76argy5m4t4asolc2rbj2nsvpercejurnezosy"
          alt="ANTCO Logo"
          width={110}
          height={110}
          className="mb-2 rounded-full bg-white p-2 shadow-lg"
          priority
          unoptimized
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFD600] tracking-tight drop-shadow-lg mt-2">AntCoders</h1>
        <p className="text-lg sm:text-xl mt-2 max-w-xl text-center font-medium">
          🚀 Introducing <span className="font-semibold">ANTCO</span> – The first community-driven token on Solana for developers!
          <br />
          Support, donate, and grow with us as we empower devs worldwide.
          <br />
          <span className="font-semibold">Zero tax. Fair launch. Big vision.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-6">
          <a
            href="https://t.me/antcoderstoken"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-[#229ED9] to-[#176ca1] hover:from-[#176ca1] hover:to-[#229ED9] transition-all text-white font-semibold py-4 px-6 text-center shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <Image src="/telegram.svg" alt="Telegram" width={20} height={20} className="w-5 h-5 inline-block" />
            Join Telegram
          </a>
          <a
            href="https://x.com/AntCodersToken"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-[#22242A] to-[#444654] hover:from-[#444654] hover:to-[#22242A] transition-all text-white font-semibold py-4 px-6 text-center shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <Image src="/x.svg" alt="X" width={20} height={20} className="w-5 h-5 inline-block" />
            Follow on X
          </a>
          <a
            href="https://dexscreener.com/solana/B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-[#FFD600] to-[#bfa600] hover:from-[#bfa600] hover:to-[#FFD600] transition-all text-black font-semibold py-4 px-6 text-center shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
          >
            Trade on DEX
          </a>
          <a
            href="https://jup.ag/swap/SOL-CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#4CAF50] transition-all text-white font-semibold py-4 px-6 text-center shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
          >
            Swap on Jupiter
          </a>
        </div>
        <section className="mt-8 text-center max-w-xl mx-auto flex flex-col gap-8 w-full">
          <div className="rounded-2xl bg-white/10 border border-gray-700 shadow p-6 sm:p-8 flex flex-col gap-2 items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FFD600] mb-2 flex items-center gap-2">
              <span>Token Info</span>
              <a
                href="https://solscan.io/token/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-[#FFD600] text-black px-2 py-1 rounded font-mono hover:underline"
              >
                View on Solscan
              </a>
            </h2>
            {loading ? (
              <span className="text-gray-400 text-sm">Loading token data...</span>
            ) : tokenData && !tokenData.error ? (
              <>
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-base font-semibold">Symbol: {tokenData.meta?.symbol || "N/A"}</span>
                  <span className="text-base font-semibold">Name: {tokenData.meta?.name || "N/A"}</span>
                  <span className="text-base font-semibold">
                    Supply: {tokenData.meta?.supply ? Number(tokenData.meta.supply).toLocaleString() : "N/A"}
                  </span>
                  <span className="text-base text-[#19FB9B] font-semibold">
                    Price: {tokenData.price?.priceUsdt ? `$${Number(tokenData.price.priceUsdt).toFixed(6)}` : "N/A"} USDT
                  </span>
                </div>
              </>
            ) : (
              <span className="text-red-400 text-sm">Could not load token data.</span>
            )}
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#1a1a40] via-[#0a0a23] to-[#181830] shadow p-6 sm:p-8 border border-[#222]">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-[#FFD600] drop-shadow">Get Ready for the ANTCO Airdrop!</h2>
            <p className="text-base sm:text-lg text-white mb-2 font-medium">Follow us to be the first to know when it drops!</p>
            <p className="text-base sm:text-lg text-[#19FB9B] font-semibold">Big things are coming for all devs and supporters.</p>
          </div>

          {/* Add Liquidity Section */}
          <div className="rounded-2xl bg-[#181830]/80 border border-[#19FB9B] shadow p-6 sm:p-8 flex flex-col gap-3 items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#19FB9B] mb-2 flex items-center gap-2">
              <span>💧 Help Grow ANTCO: Add Liquidity!</span>
            </h2>
            <p className="text-base text-white text-center">
              Support the <span className="font-semibold">ANTCO</span> ecosystem and earn fees by adding liquidity to our official Raydium pool.
              <br />
              Your contribution helps strengthen the community and trading experience for everyone.
            </p>
            <a
              href="https://raydium.io/liquidity/increase/?mode=add&pool_id=B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-[#19FB9B] hover:bg-[#13a87a] transition-colors text-black font-bold py-3 px-8 text-center shadow-lg text-lg"
            >
              Add Liquidity on Raydium
            </a>
            <span className="text-xs text-gray-400 mt-1 break-all">
              Pool Address:
              <br />
              B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH
            </span>
          </div>
          <div className="rounded-2xl bg-white/10 border border-gray-700 shadow p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-2 text-white">Why ANTCO?</h2>
            <p className="text-base text-gray-200">
              ANTCO is more than just a token—it&apos;s a movement to empower developers globally. By supporting ANTCO, you&apos;re helping to build a
              fair, transparent, and collaborative ecosystem on Solana. Join our community and help shape the future of Web3 development!
            </p>
          </div>
        </section>
      </main>
      <div className="bg-gray-900 text-white p-6 mt-10 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">📄 Read the Whitepaper</h2>
        <a href="/whitepaper" className="text-[#FFD600] hover:underline">
          Click here to read the full whitepaper
        </a>
        <div className="flex justify-center space-x-4 mt-4">
          <span className="bg-[#00ffa6] text-black px-4 py-2 rounded-lg">#Solana</span>
          <span className="bg-[#ff0022] text-black px-4 py-2 rounded-lg">#ANTCO</span>
          <span className="bg-[#189088] text-black px-4 py-2 rounded-lg">#Crypto</span>
          <span className="bg-[#FFD600] text-black px-4 py-2 rounded-lg">#Developers</span>
          <span className="bg-[#d09393] text-black px-4 py-2 rounded-lg">#Web3</span>
        </div>
      </div>
      <footer className="w-full text-center py-4 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} ANTCO – Community-driven token for developers on Solana.
      </footer>
    </div>
  );
}
