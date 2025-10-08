"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Shield, Zap, RefreshCw } from "lucide-react";

type TokenMeta = {
  symbol?: string;
  name?: string;
  supply?: string | number;
  circSupply?: string | number;
  burnedTokens?: string | number;
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
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background elements - Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative animate-float">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-full opacity-75 blur-md animate-spin-slow"></div>
                  <Image
                    src="https://azure-elaborate-narwhal-225.mypinata.cloud/ipfs/bafybeicmbo2og3lhzato76argy5m4t4asolc2rbj2nsvpercejurnezosy"
                    alt="ANTCO Logo"
                    width={100}
                    height={100}
                    className="relative rounded-full bg-white dark:bg-gray-800 p-3 shadow-2xl ring-4 ring-orange-500/30"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Empowering Developers.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Fueling Innovation.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-4 max-w-4xl mx-auto">
              The next-generation community token for builders on Solana.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              AntCoders (ANTCO) is more than just a token — it&apos;s a <strong className="text-orange-500">movement</strong>.
              <br />
              Support developers, fund open-source innovation, and earn rewards while growing the ecosystem.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://t.me/antcoderstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-[#229ED9] hover:bg-[#1a7db0] text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
                Join the Community
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://x.com/AntCodersToken"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Image src="/x.svg" alt="X" width={20} height={20} />
                Follow Updates on X
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://dexscreener.com/solana/B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <TrendingUp size={20} />
                Buy on DEX
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <RefreshCw size={20} />
                Swap on Jupiter
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Whitepaper Link */}
            <div className="mb-12">
              <a
                href="/whitepaper"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-semibold transition-colors group"
              >
                <span>📄 Read the Whitepaper</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Feature Highlights - 3 Icons Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {/* For Developers, By Developers */}
              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl">🧑‍💻</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">For Developers, By Developers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Build, share, and earn with ANTCO.</p>
              </div>

              {/* Community-Driven Growth */}
              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Community-Driven Growth</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fair launch, zero tax, transparent vision.</p>
              </div>

              {/* Real Utility */}
              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Real Utility</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Use ANTCO for open-source projects, hackathons, and dev grants.</p>
              </div>
            </div>

            {/* Optional Closing Line */}
            <p className="text-lg text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">
              Together, we&apos;re building the future of decentralized development.
            </p>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">📊 Token Information</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn about ANTCO tokenomics, distribution, and how it powers the developer ecosystem
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-end mb-8">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
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

                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-400/10 dark:to-blue-500/10 rounded-xl p-6 text-center backdrop-blur-sm border border-blue-500/20">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {tokenData.meta?.circSupply ? Number(tokenData.meta.circSupply).toLocaleString() : "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Circulating Supply</div>
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

                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-400/10 dark:to-red-500/10 rounded-xl p-6 text-center backdrop-blur-sm border border-red-500/20">
                  <div className="text-lg font-bold text-red-600 dark:text-red-400 mb-1">
                    {tokenData.meta?.burnedTokens ? Number(tokenData.meta.burnedTokens).toLocaleString() : "0"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Burned Tokens</div>
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

      {/* Featured Projects Carousel */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">🚀 Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore groundbreaking projects built by the AntCoders community
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4" style={{ scrollSnapType: "x mandatory" }}>
              {/* Solana Trading Bot */}
              <div
                className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-full px-3 py-1 text-sm font-medium">
                    Trading
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Live</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Solana Trading Bot</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Sophisticated trading bot for Solana tokens with secure web dashboard and configurable strategies.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by AntCoders Team</span>
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full px-2 py-1 text-xs font-bold">
                    ⭐ Featured
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href="/projects/solana-trading-bot"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <ArrowRight size={14} />
                    View Details
                  </a>
                  <a
                    href="https://solana-trading-bot.antcoders.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <TrendingUp size={14} />
                    Try Live
                  </a>
                </div>
              </div>

              {/* Coming Soon Projects */}
              {/* AntLog Project */}
              <div
                className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full px-3 py-1 text-sm font-medium">
                    Tool
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Live</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AntLog</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  AntLog — a simple, installable trading journal that helps you record trades, track performance, and improve over time.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by AntLog Team</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href="/projects/antlog"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <ArrowRight size={14} />
                    View Details
                  </a>
                  <a
                    href="https://antlog.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <TrendingUp size={14} />
                    Visit
                  </a>
                </div>
              </div>

              {/* AntCoders Puzzle Game */}
              <div
                className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full px-3 py-1 text-sm font-medium">
                    Game
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Live</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AntCoders Puzzle</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  A classic sliding puzzle game with a modern twist. Challenge yourself with various board sizes and earn rewards.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by AntCoders Team</span>
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 rounded-full px-2 py-1 text-xs font-bold">
                    ⭐ Featured
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href="/projects/antcoders-puzzle"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <ArrowRight size={14} />
                    View Details
                  </a>
                  <a
                    href="https://puzzle.antcoders.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                  >
                    <TrendingUp size={14} />
                    Play Now
                  </a>
                </div>
              </div>
              <div
                className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-75"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full px-3 py-1 text-sm font-medium">
                    DeFi
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs">Coming Soon</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">DeFi Analytics Dashboard</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Real-time cryptocurrency analytics and portfolio tracking tool with Web3 integration.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by Anonymous Dev</span>
                </div>

                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/20 text-gray-500 dark:text-gray-400 rounded-lg text-sm">
                    <Zap size={14} className="opacity-50" />
                    <span>In Development</span>
                  </div>
                </div>
              </div>

              <div
                className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-75"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full px-3 py-1 text-sm font-medium">
                    NFT
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs">Coming Soon</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">NFT Marketplace Builder</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  No-code solution for creating custom NFT marketplaces on Solana blockchain.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by Anonymous Creator</span>
                </div>

                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/20 text-gray-500 dark:text-gray-400 rounded-lg text-sm">
                    <Shield size={14} className="opacity-50" />
                    <span>In Development</span>
                  </div>
                </div>
              </div>

              <div
                className="flex-shrink-0 w-80 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-75"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-full px-3 py-1 text-sm font-medium">
                    Security
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-xs">Coming Soon</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Contract Auditor</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Automated security analysis tool for Solana smart contracts with detailed reports.
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by Security Expert</span>
                </div>

                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/20 text-gray-500 dark:text-gray-400 rounded-lg text-sm">
                    <Users size={14} className="opacity-50" />
                    <span>In Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="text-lg">🚀</span>
              View All Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500/5 to-blue-500/5 dark:from-orange-400/5 dark:to-blue-400/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              💰 Turn Your Code Into <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">Funding</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ANTCO connects developers with real funding opportunities for their contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* For Developers */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span className="text-xl">👨‍💻</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">For Developers</h3>
              <ul className="text-left space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Get funded for GitHub contributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Earn for code reviews & mentoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Build on-chain reputation</span>
                </li>
              </ul>
            </div>

            {/* For Projects */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">For Projects</h3>
              <ul className="text-left space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Crowdfund your next idea</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Reward contributors automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Access global talent pool</span>
                </li>
              </ul>
            </div>

            {/* For Community */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <span className="text-xl">🌍</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">For Community</h3>
              <ul className="text-left space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Support projects you believe in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Earn rewards for early adoption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold text-xs">✓</span>
                  <span>Shape the future together</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="backdrop-blur-lg bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20 rounded-2xl p-4 max-w-3xl mx-auto">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🔥 Ready to Get Funded?</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                Join <strong>50+ developers</strong> earning ANTCO tokens for their contributions
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  Submit Project
                  <ArrowRight size={14} />
                </a>
                <a
                  href="/how-to-get-token"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Start Earning
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">🚀 How AntCoders Works</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Simple steps to get your open-source project funded and supported by our developer community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Get $1 ANTCO</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Create a wallet and purchase at least $1 worth of ANTCO tokens to join our ecosystem
              </p>
            </div>

            {/* Step 2 */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Submit Project</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Submit your open-source project with GitHub repo or website for community review
              </p>
            </div>

            {/* Step 3 */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Get Featured</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Your project gets showcased on AntCoders with free hosting and a professional domain
              </p>
            </div>

            {/* Step 4 */}
            <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                4
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Receive Support</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Get donations, contributors, and community support to grow your project every day
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Your project remains 100% yours • No ownership claims</span>
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
