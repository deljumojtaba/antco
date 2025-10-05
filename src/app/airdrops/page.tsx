"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Gift, ExternalLink, Calendar } from "lucide-react";

type TokenMeta = {
  symbol?: string;
  name?: string;
  supply?: string | number;
  circSupply?: string | number;
  burnedTokens?: string | number;
  lockedTokens?: string | number;
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
type PoolInfo = {
  address?: string;
  lockedTokens?: string | number;
  info?: object;
};
type TokenData = {
  meta?: TokenMeta;
  price?: TokenPrice;
  pool?: PoolInfo;
  error?: string;
};

export default function AirdropsPage() {
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

  const airdropTasks = [
    {
      title: "🤖 Telegram Bot Airdrop - Join & Earn",
      description:
        "Join our official Telegram channel, start the bot, and register your Solana wallet. Get 100,000 ANTCO instantly (within 5 hours)!",
      reward: "100,000 ANTCO",
      difficulty: "Easy",
      url: "https://t.me/AntcoTokenBot",
      completed: false,
    },
    {
      title: "📢 Telegram Bot - Invite & Earn",
      description:
        "Invite friends using your unique referral link from the bot. Earn 20,000 ANTCO for each valid referral. Weekly rewards distributed every Sunday!",
      reward: "20,000 ANTCO per referral",
      difficulty: "Medium",
      url: "https://t.me/AntcoTokenBot",
      completed: false,
    },
    {
      title: "Like our token on Jupiter",
      description: "Show your support by liking ANTCO on Jupiter Exchange, then DM us on X with screenshot + your Phantom wallet address",
      reward: "80,000 ANTCO",
      difficulty: "Easy",
      url: "https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E",
      completed: false,
    },
    {
      title: "Follow us on X (Twitter)",
      description: "Stay updated with the latest ANTCO news and developments, then DM us with your Phantom wallet address",
      reward: "40,000 ANTCO",
      difficulty: "Easy",
      url: "https://x.com/AntCodersToken",
      completed: false,
    },
    {
      title: "Share ANTCO on social media",
      description: "Help spread the word about ANTCO to your network by sharing/retweeting our posts, then DM us proof + Phantom wallet address",
      reward: "50,000 ANTCO",
      difficulty: "Medium",
      url: "https://x.com/AntCodersToken",
      completed: false,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300";
      case "Medium":
        return "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300";
      case "Hard":
        return "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl p-3 mb-6 shadow-lg">
            <Gift className="text-white" size={28} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
            ANTCO Airdrops
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get rewarded for being part of the ANTCO community. Complete tasks and earn free tokens!
          </p>
        </div>

        {/* Airdrop Banner */}
        <div className="mb-12">
          <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-2 border-white/30 dark:border-gray-700/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase">Live Campaign</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎁 ANTCO Airdrop Campaign</h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our community and complete simple tasks to earn ANTCO tokens. No purchase necessary - just show your support!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-2 border-purple-500/30 rounded-xl px-6 py-3">
                  <div className="text-center">
                    <div className="text-purple-600 dark:text-purple-400 font-bold text-lg">Total Allocated: 1.16B ANTCO</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Community Airdrop Pool</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border-2 border-green-500/30 rounded-xl px-6 py-3">
                  <div className="text-center">
                    <div className="text-green-600 dark:text-green-400 font-bold text-lg">Current Distribution: 200,000 ANTCO</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Oct 6 - Nov 10, 2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telegram Bot Campaign Section */}
        <div className="mb-12">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 border-2 border-blue-500/30 dark:border-blue-400/30 rounded-2xl p-6 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">🤖 Telegram Airdrop Campaign</h2>
              <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-3">
                Join our automated Telegram bot campaign and earn ANTCO tokens instantly!
              </p>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-xl px-4 py-2">
                <Calendar className="text-orange-600 dark:text-orange-400" size={18} />
                <span className="text-orange-600 dark:text-orange-400 font-bold">Oct 6 - Nov 10, 2025</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* How It Works */}
              <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">💎 How It Works</h3>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">1️⃣ Join & Earn</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Join Telegram & start bot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Register wallet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span className="font-bold text-green-600 dark:text-green-400">Get 100,000 ANTCO instantly</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-4">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">2️⃣ Invite & Earn</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">20,000 ANTCO per referral</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>Weekly payments every Sunday</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reward Schedule & Rules */}
              <div className="space-y-4">
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">📊 Payment Schedule</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-1 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-700 dark:text-gray-300">Week 1-5</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">Every Sunday</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-700 dark:text-gray-300 font-bold">Final Bonus</span>
                      <span className="text-purple-600 dark:text-purple-400 font-bold">Nov 10</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-5 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">⚙️ Rules</h3>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>One wallet per user</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500">•</span>
                      <span>Stay in channel until end</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span className="font-bold">No fake accounts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Start Guide */}
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/40 rounded-2xl p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-3">
                  <div className="text-3xl mb-1">1️⃣</div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm">Join Bot</p>
                </div>
                <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-3">
                  <div className="text-3xl mb-1">2️⃣</div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm">Use /wallet</p>
                </div>
                <div className="text-center bg-white/50 dark:bg-gray-800/50 rounded-xl p-3">
                  <div className="text-3xl mb-1">3️⃣</div>
                  <p className="text-gray-900 dark:text-white font-bold text-sm">Use /mycode</p>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://t.me/AntcoTokenBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  🤖 Start Bot
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Current Tasks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Available Tasks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {airdropTasks.map((task, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border-2 border-white/30 dark:border-gray-700/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {task.title}
                  </h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${getDifficultyColor(task.difficulty)} shadow-md`}>
                    {task.difficulty}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm">{task.description}</p>

                <div className="flex items-center justify-between mt-auto gap-3">
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl px-4 py-2">
                    <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">🎁 {task.reward}</span>
                  </div>

                  {task.url !== "#" ? (
                    <a
                      href={task.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      Complete
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-5 py-2 bg-gray-400 dark:bg-gray-600 text-white rounded-xl font-bold text-sm opacity-50 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency & Burn Information */}
        <div className="mb-12">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">🔥 Token Burn Transparency</h3>
            <div className="text-center mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Real-time circulating supply vs. tokenomics allocation. The difference reveals tokens permanently burned.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-4 text-center">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">📊 Tokenomics Total</h4>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">7.77B</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Original Supply</div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-4 text-center">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">🌊 Circulating Supply</h4>
                <div className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {loading
                    ? "Loading..."
                    : tokenData && !tokenData.error
                    ? tokenData.meta?.circSupply
                      ? Number(tokenData.meta.circSupply).toLocaleString()
                      : "N/A"
                    : "N/A"}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Current Supply</div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-xl p-4 text-center">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">🔒 Pool Locked</h4>
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {loading
                    ? "Loading..."
                    : tokenData && !tokenData.error
                    ? tokenData.meta?.lockedTokens
                      ? Number(tokenData.meta.lockedTokens).toLocaleString()
                      : "N/A"
                    : "N/A"}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Inaccessible Tokens</div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4 text-center">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">🔥 Tokens Burned</h4>
                <div className="text-xl font-bold text-red-600 dark:text-red-400 mb-1">
                  {loading
                    ? "Loading..."
                    : tokenData && !tokenData.error
                    ? tokenData.meta?.burnedTokens
                      ? Number(tokenData.meta.burnedTokens).toLocaleString()
                      : "0"
                    : "N/A"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Permanently Removed</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ✅ All burn transactions are publicly verifiable on the Solana blockchain
                <br />
                🔒 Pool locked tokens are tracked via liquidity pool monitoring
                <br />
                📈 Real-time data sourced from multiple APIs for complete transparency
              </p>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="mb-8">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">🌐 Official Links:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-3">
              <a
                href="https://antcoders.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Website
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://t.me/antcoderstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Telegram Channel
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="https://x.com/antcoderstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                Twitter/X
              </a>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">Token: CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Ready to Earn ANTCO?</h2>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6">Start completing tasks today and be part of the ANTCO community!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://t.me/antcoderstoken"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 transform hover:scale-105"
            >
              Join Telegram
            </a>
            <Link
              href="/how-to-get-token"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold text-sm transition-all duration-200 transform hover:scale-105"
            >
              How to Get ANTCO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
