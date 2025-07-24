"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gift, ExternalLink, CheckCircle, Calendar, Users, TrendingUp } from "lucide-react";

type TokenMeta = {
  symbol?: string;
  name?: string;
  supply?: string | number;
  circSupply?: string | number;
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
      title: "Like our token on Jupiter",
      description: "Show your support by liking ANTCO on Jupiter Exchange, then DM us on X with screenshot + your Phantom wallet address",
      reward: "80,000 ANTCO",
      difficulty: "Easy",
      url: "https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E",
      completed: false,
    },
    {
      title: "Join our Telegram community",
      description: "Connect with fellow developers in our active community, then DM us on X with your Telegram username + Phantom wallet address",
      reward: "40,000 ANTCO",
      difficulty: "Easy",
      url: "https://t.me/antcoderstoken",
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
    {
      title: "Refer 5 friends to join",
      description: "Invite other developers to join the ANTCO ecosystem (Telegram + X), then DM us their usernames + your Phantom wallet address",
      reward: "100,000 ANTCO",
      difficulty: "Hard",
      url: "https://t.me/antcoderstoken",
      completed: false,
    },
  ];

  const upcomingAirdrops = [
    {
      title: "Developer Contribution Rewards",
      description: "Rewards for developers who contribute to ANTCO ecosystem. Pool may increase to 300M ANTCO based on community growth",
      date: "Q3 2025",
      reward: "Up to 100M ANTCO",
    },
    {
      title: "Community Building Campaign",
      description: "Special rewards for active community members. Enhanced rewards based on participation levels",
      date: "Q4 2025",
      reward: "Up to 100M ANTCO",
    },
    {
      title: "Partnership Launch Rewards",
      description: "Celebrate new partnerships with bonus airdrops. Major allocation for ecosystem partnerships",
      date: "Q1 2026",
      reward: "Up to 100M ANTCO",
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
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-4 mb-8">
            <Gift className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
            ANTCO Airdrops
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get rewarded for being part of the ANTCO community. Complete tasks and earn free tokens!
          </p>
        </div>

        {/* Airdrop Banner */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">🎁 Current ANTCO Airdrop Campaign</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Join our community and complete simple tasks to earn ANTCO tokens. No purchase necessary - just show your support!
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2">
                    <span className="text-green-600 dark:text-green-400 font-semibold">Community Pool: 1,165,500,000 ANTCO</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl px-4 py-2">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Campaign Ends: Dec 31, 2025</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/airdrop-banner.jpeg"
                  alt="ANTCO Token Airdrop Event"
                  width={300}
                  height={225}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Current Tasks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Available Tasks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {airdropTasks.map((task, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">{task.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(task.difficulty)}`}>{task.difficulty}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{task.description}</p>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 mb-4 text-center">
                  <a
                    href="#claim-rewards"
                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-600 dark:text-blue-400 rounded-md transition-colors font-medium text-xs"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("claim-rewards")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    📋 How to Claim
                  </a>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl px-4 py-2">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">🎁 {task.reward}</span>
                  </div>

                  {task.url !== "#" ? (
                    <a
                      href={task.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      Complete Task
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-400 dark:bg-gray-600 text-white rounded-xl font-semibold opacity-50 cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Airdrop Stats */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Airdrop Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">1.16B+</div>
                <div className="text-gray-600 dark:text-gray-400">Community Tokens</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">46</div>
                <div className="text-gray-600 dark:text-gray-400">Participants</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">248</div>
                <div className="text-gray-600 dark:text-gray-400">Tasks Completed</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">16.8M</div>
                <div className="text-gray-600 dark:text-gray-400">Tokens Distributed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency & Burn Information */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
              🔥 Token Burn Transparency
            </h3>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                ANTCO maintains full transparency by showing real-time circulating supply vs. tokenomics allocation. The difference reveals tokens
                permanently burned from circulation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">📊 Tokenomics Total</h4>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">7.77B</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Original Supply</div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🌊 Circulating Supply</h4>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {loading
                    ? "Loading..."
                    : tokenData && !tokenData.error
                    ? tokenData.meta?.circSupply
                      ? Number(tokenData.meta.circSupply).toLocaleString()
                      : "N/A"
                    : "N/A"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Current Supply</div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🔒 Pool Locked</h4>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {loading
                    ? "Loading..."
                    : tokenData && !tokenData.error
                    ? tokenData.meta?.lockedTokens
                      ? Number(tokenData.meta.lockedTokens).toLocaleString()
                      : "N/A"
                    : "N/A"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Inaccessible Tokens</div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">🔥 Tokens Burned</h4>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                  {loading
                    ? "Loading..."
                    : tokenData && !tokenData.error
                    ? tokenData.meta?.circSupply
                      ? (7770000000 - Number(tokenData.meta.circSupply)).toLocaleString()
                      : "N/A"
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

        {/* Upcoming Airdrops */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Upcoming Airdrops</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingAirdrops.map((airdrop, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-6 shadow-2xl flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-blue-500" size={24} />
                  <span className="text-blue-500 font-semibold">{airdrop.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{airdrop.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{airdrop.description}</p>
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 text-center mt-auto">
                  <span className="text-green-600 dark:text-green-400 font-bold">{airdrop.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Liquidity Section */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-400/10 dark:to-blue-400/10 border border-green-500/20 dark:border-green-400/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
              💧 Help Grow ANTCO: Add Liquidity!
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4">
                Support the <span className="font-semibold text-orange-600 dark:text-orange-400">ANTCO</span> ecosystem and earn fees by adding
                liquidity to our official Raydium pool. Your contribution helps strengthen the community and trading experience for everyone.
              </p>
              <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                💰 Bonus: Use your LP tokens to farm and earn additional rewards!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">🌊 Liquidity Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Earn Trading Fees</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Collect fees from every trade on the pool</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Support ANTCO</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Help reduce slippage and improve trading</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">LP Farm Rewards</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Stake LP tokens for additional yield farming</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">📊 Pool Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pool Address</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded break-all">
                      B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Token Contract</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded break-all">
                      CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Platform</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Raydium (Solana DEX)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://raydium.io/liquidity-pools/?token=CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E&tab=standard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
              >
                🚀 Add Liquidity on Raydium
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                💡 <strong>Pro Tip:</strong> After adding liquidity, you can stake your LP tokens in farming pools for additional rewards!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information for Airdrop Claims */}
        <div className="mb-16" id="claim-rewards">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 border border-blue-500/20 dark:border-blue-400/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
              📬 How to Claim Your Airdrop Rewards
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                After completing any task above, send us a Direct Message on X (Twitter) with the required information to claim your ANTCO tokens!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">📱 Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">X (Twitter) DM</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Send DM to @AntCodersToken</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Telegram</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Join: t.me/antcoderstoken</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">📋 Required Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Task Proof</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Screenshot or username as required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Phantom Wallet Address</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Your Solana wallet address for token delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Earn ANTCO?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Start completing tasks today and be part of the ANTCO community revolution!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/antcoderstoken"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Join Telegram
            </a>
            <Link
              href="/how-to-get-token"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              How to Get ANTCO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
