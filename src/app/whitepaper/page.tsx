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
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              ANTCO is a revolutionary community-driven token built on the Solana blockchain, specifically designed to empower developers worldwide.
              Our mission is to create a sustainable ecosystem that supports innovation, collaboration, and growth in the decentralized development
              space.
            </p>
            <p className="text-lg leading-relaxed">
              With zero transaction taxes, fair launch principles, and a developer-first approach, ANTCO represents the future of community-owned
              development infrastructure.
            </p>
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

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1,000,000,000</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Supply</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">80%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Liquidity Pool</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 mb-2">15%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Community Rewards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 mb-2">5%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Development Fund</div>
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
