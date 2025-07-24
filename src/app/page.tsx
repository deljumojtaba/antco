"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Shield, Zap, RefreshCw } from "lucide-react";

type TokenMeta = {
  symbol?: string;
  name?: string;
  supply?: string | number;
  circSupply?: string | number;
  decimals?: number;
  holderCount?: number;
  website?: string;
  icon?: string;
};
type TokenPrice = {
  priceUsdt?: string | number;
  fdv?: string | number;
  mcap?: string | number;
  liquidity?: string | number;
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="https://azure-elaborate-narwhal-225.mypinata.cloud/ipfs/bafybeicmbo2og3lhzato76argy5m4t4asolc2rbj2nsvpercejurnezosy"
                  alt="ANTCO Logo"
                  width={120}
                  height={120}
                  className="rounded-full bg-white dark:bg-gray-800 p-3 shadow-2xl animate-float ring-4 ring-orange-500/20"
                  priority
                  unoptimized
                />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 opacity-75 blur animate-glow"></div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
              AntCoders
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              🚀 Introducing <span className="font-bold text-orange-500">ANTCO</span> – The first community-driven token on Solana for developers!
              <br />
              Support, donate, and grow with us as we empower devs worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                Zero Tax
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Fair Launch
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                Big Vision
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              <a
                href="https://t.me/antcoderstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#229ED9] hover:bg-[#1a7db0] text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
                Join Telegram
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://x.com/AntCodersToken"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                <Image src="/x.svg" alt="X" width={20} height={20} />
                Follow on X
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://dexscreener.com/solana/B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                <TrendingUp size={20} />
                Trade on DEX
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                <RefreshCw size={20} />
                Swap on Jupiter
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Token Information</h2>
              <a
                href="https://solscan.io/token/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors text-sm"
              >
                View on Solscan
              </a>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                <span className="ml-4 text-gray-600 dark:text-gray-400">Loading token data...</span>
              </div>
            ) : tokenData && !tokenData.error ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{tokenData.meta?.symbol || "N/A"}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Symbol</div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{tokenData.meta?.name || "N/A"}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Name</div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {tokenData.meta?.supply ? Number(tokenData.meta.supply).toLocaleString() : "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Supply</div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-center gap-2">
                    <Users size={20} />
                    {tokenData.meta?.holderCount || "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Holders</div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 dark:from-green-400/10 dark:to-green-500/10 rounded-xl p-6 text-center backdrop-blur-sm border border-green-500/20">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400 mb-1">
                    {tokenData.price?.priceUsdt ? `$${Number(tokenData.price.priceUsdt).toFixed(8)}` : "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Price (USD)</div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {tokenData.price?.mcap ? `$${Number(tokenData.price.mcap).toLocaleString()}` : "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Market Cap</div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {tokenData.price?.fdv ? `$${Number(tokenData.price.fdv).toLocaleString()}` : "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">FDV</div>
                </div>

                <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {tokenData.price?.liquidity ? `$${Number(tokenData.price.liquidity).toLocaleString()}` : "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Liquidity</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-red-500 dark:text-red-400 text-lg font-medium">Could not load token data</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose ANTCO?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built by developers, for developers. Join the future of decentralized development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Zero Tax</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No hidden fees or taxes. What you trade is what you get. Complete transparency in every transaction.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built by the community, for the community. Every decision is made transparently with community input.
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Developer Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Purpose-built to support and empower developers worldwide with tools, resources, and funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Join the Revolution?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Be part of the first community-driven token ecosystem for developers on Solana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/whitepaper"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                Read Whitepaper
              </a>
              <a
                href="/airdrops"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                View Airdrops
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ANTCO – Community-driven token for developers on Solana.
          </p>
        </div>
      </footer>
    </div>
  );
}
