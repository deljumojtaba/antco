"use client";

import React from "react";
import { PieChart, Lock, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function TokenomicsPage() {
  const totalSupply = 7770000000;
  const liquidityPool = 4273500000; // 55%
  const communityRewards = 1165500000; // 15%
  const developmentTeam = 777000000; // 10%
  const strategicReserve = 777000000; // 10%
  const marketingListings = 388500000; // 5%
  const projectTreasury = 388500000; // 5%

  const distributionData = [
    {
      name: "Initial Liquidity Pool",
      amount: liquidityPool,
      percentage: 55,
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-600 dark:text-blue-400",
      description: "Locked in decentralized liquidity pools for trading",
      status: "Permanently locked",
    },
    {
      name: "Community & Airdrops",
      amount: communityRewards,
      percentage: 15,
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/20",
      textColor: "text-green-600 dark:text-green-400",
      description: "Rewards for early supporters and community engagement",
      status: "Distributed over time",
    },
    {
      name: "Development Team",
      amount: developmentTeam,
      percentage: 10,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-600 dark:text-purple-400",
      description: "Core team and long-term contributors",
      status: "Vesting schedule",
    },
    {
      name: "Strategic Reserve",
      amount: strategicReserve,
      percentage: 10,
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500/20",
      textColor: "text-orange-600 dark:text-orange-400",
      description: "Future collaborations and partnerships",
      status: "Strategic allocation",
    },
    {
      name: "Marketing & Listings",
      amount: marketingListings,
      percentage: 5,
      color: "from-pink-500 to-pink-600",
      borderColor: "border-pink-500/20",
      textColor: "text-pink-600 dark:text-pink-400",
      description: "Marketing campaigns and exchange listings",
      status: "Operational use",
    },
    {
      name: "Project Treasury",
      amount: projectTreasury,
      percentage: 5,
      color: "from-teal-500 to-teal-600",
      borderColor: "border-teal-500/20",
      textColor: "text-teal-600 dark:text-teal-400",
      description: "Future ecosystem development and dApps",
      status: "Development fund",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 mb-8">
            <PieChart className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            ANTCO Tokenomics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete breakdown of ANTCO token distribution, economics, and transparency metrics.
          </p>
        </div>

        {/* Total Supply Overview */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Total Supply</h2>
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">7,770,000,000</div>
            <div className="text-xl text-gray-600 dark:text-gray-400">ANTCO Tokens (Fixed Supply)</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">55%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Initial Liquidity Pool</div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">15%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Community & Airdrops</div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">30%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Development & Operations</div>
            </div>
          </div>
        </div>

        {/* Token Distribution Table */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center flex items-center justify-center gap-3">
            <PieChart className="text-blue-500" size={32} />
            Token Distribution
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-bold text-gray-900 dark:text-white">Category</th>
                  <th className="text-center p-4 font-bold text-gray-900 dark:text-white">Percentage</th>
                  <th className="text-center p-4 font-bold text-gray-900 dark:text-white">Token Amount</th>
                  <th className="text-left p-4 font-bold text-gray-900 dark:text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {distributionData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="p-4">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{item.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`text-xl font-bold ${item.textColor}`}>{item.percentage}%</span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">{item.amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">ANTCO</div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.textColor} bg-current bg-opacity-10`}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Total Supply</td>
                  <td className="p-4 text-center font-bold text-gray-900 dark:text-white">100%</td>
                  <td className="p-4 text-center font-bold text-gray-900 dark:text-white">{totalSupply.toLocaleString()} ANTCO</td>
                  <td className="p-4 font-bold text-gray-900 dark:text-white">Fixed Supply</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Supply Model:</strong> Fixed total supply with no minting capability - deflationary by design
              <br />⚡ <strong>Token Standard:</strong> SPL Token on Solana blockchain for fast and low-cost transactions
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
            <Shield className="text-green-500" size={32} />
            Tokenomics Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Zero Tax</h3>
              <p className="text-gray-600 dark:text-gray-300">No buy/sell taxes. Every transaction transfers the full amount.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fixed Supply</h3>
              <p className="text-gray-600 dark:text-gray-300">No minting possible. Supply decreases through burns only.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Owned</h3>
              <p className="text-gray-600 dark:text-gray-300">No team allocation. Built by and for the community.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Deflationary</h3>
              <p className="text-gray-600 dark:text-gray-300">Token burns reduce supply over time, increasing scarcity.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fast & Cheap</h3>
              <p className="text-gray-600 dark:text-gray-300">Built on Solana for sub-second transactions and minimal fees.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PieChart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Transparent</h3>
              <p className="text-gray-600 dark:text-gray-300">All allocations public and verifiable on-chain.</p>
            </div>
          </div>
        </div>

        {/* Economic Model */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Economic Model</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Value Accrual</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Deflationary Pressure</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Regular token burns reduce circulating supply</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Utility Demand</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Required for platform access and governance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Community Growth</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Network effects increase value as adoption grows</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sustainability</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Development Funding</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">10% for team + 5% treasury ensures long-term development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Community Incentives</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">15% for rewards maintains strong engagement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Liquidity Stability</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">55% in liquidity ensures stable trading</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Learn More About ANTCO</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Explore our comprehensive documentation and join the community.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/whitepaper"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/airdrops"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              View Airdrops
            </Link>
            <a
              href="https://t.me/antcoderstoken"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
