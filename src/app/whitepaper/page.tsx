"use client";

import React, { useState } from "react";
import { FileText, Copy, Check, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

function CopyableText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span
      className="bg-gray-800 dark:bg-gray-700 px-3 py-1 rounded-lg text-sm cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors inline-flex items-center gap-2"
      onClick={handleCopy}
    >
      <code className="text-orange-400">{text}</code>
      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
      {copied && <span className="text-green-500 text-xs">(Copied!)</span>}
    </span>
  );
}

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-4 mb-8">
            <FileText className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
            ANTCO Whitepaper
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The first community-driven token on Solana for developers. Building the future of decentralized development.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              1
            </span>
            Executive Summary
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              ANTCO is a revolutionary community-driven token built on the Solana blockchain, specifically designed to empower developers worldwide.
              Our mission is to create a sustainable ecosystem that supports innovation, collaboration, and growth in the decentralized development
              space.
            </p>
            <p className="text-lg leading-relaxed">
              With zero transaction taxes, fair launch principles, and a developer-first approach, ANTCO represents the future of community-owned
              development infrastructure. The token serves as both a utility token for accessing developer tools and services, and a governance token
              for community decision-making.
            </p>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">7.77B</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Fixed Total Supply</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">0%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Transaction Tax</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Community Owned</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Token Information */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              2
            </span>
            Token Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contract Address</h3>
              <CopyableText text="CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E" />
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Blockchain</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">Solana</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Token Standard</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">SPL Token</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tax</h3>
              <p className="text-lg text-green-600 dark:text-green-400 font-bold">0% Tax</p>
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              3
            </span>
            Tokenomics
          </h2>

          <div className="mb-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">7,770,000,000 ANTCO</div>
              <div className="text-lg text-gray-600 dark:text-gray-400">Total Supply (Fixed)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.27B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">55%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Initial Liquidity Pool</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Locked for trading stability</div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1.17B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">15%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Community & Airdrops</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Community rewards & incentives</div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">777M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">10%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Development Team</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Core team & contributors</div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">777M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">10%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Strategic Reserve</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Future partnerships</div>
            </div>

            <div className="bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">388.5M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">5%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Marketing & Listings</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Growth & exchange listings</div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-500/20 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">388.5M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">5%</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">Project Treasury</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Ecosystem development</div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Tokenomics Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Zero Transaction Tax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No buy/sell taxes - pure value transfer</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Fixed Supply</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No minting - deflationary by design</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Community Controlled</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Governance by token holders</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Fair Launch</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">No pre-sale or private allocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              4
            </span>
            Core Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Zero Tax</h3>
              <p className="text-gray-600 dark:text-gray-300">No hidden fees or taxes. Complete transparency in every transaction.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-300">Built by the community, for the community. Every decision is transparent.</p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Developer Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">Purpose-built to support developers with tools and resources.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              5
            </span>
            Vision & Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To create the world&apos;s largest decentralized ecosystem for developers, where innovation thrives through community collaboration
                and fair access to resources.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To empower developers worldwide by providing tools, funding, and a supportive community that drives innovation in the decentralized
                web.
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Security */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              6
            </span>
            Technology & Security
          </h2>

          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solana Blockchain</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ANTCO is built on Solana, one of the fastest and most efficient blockchains available. This ensures:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">&lt;1s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Transaction Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$0.00025</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">65,000</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">TPS Capacity</div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Security Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Immutable Smart Contract</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">No admin keys or upgrade functions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Liquidity Locked</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Initial liquidity permanently locked</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Transparent Supply</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">All tokens accounted for publicly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Community Verified</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open source and auditable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              7
            </span>
            Development Roadmap
          </h2>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>

              <div className="space-y-8">
                <div className="relative flex items-start gap-6">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">✓</div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phase 1: Foundation (Q4 2024) - COMPLETED</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Token launch on Solana blockchain</li>
                      <li>• Community building and initial distribution</li>
                      <li>• Website and documentation launch</li>
                      <li>• Telegram and social media presence</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">2</div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phase 2: Growth (Q1 2025) - IN PROGRESS</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• DEX listings and increased liquidity</li>
                      <li>• Developer tools and API launch</li>
                      <li>• Partnership program initiation</li>
                      <li>• Community governance implementation</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">3</div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700-20 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phase 3: Expansion (Q2-Q3 2025)</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Developer marketplace launch</li>
                      <li>• Mobile app development</li>
                      <li>• Cross-chain bridge implementation</li>
                      <li>• Major exchange listings</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">4</div>
                  <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phase 4: Ecosystem (Q4 2025+)</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• DeFi protocol integration</li>
                      <li>• DAO governance full implementation</li>
                      <li>• Global developer conferences</li>
                      <li>• Ecosystem fund allocation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join the ANTCO Community</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Be part of the revolution. Start building with ANTCO today.</p>
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
              href="/"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
