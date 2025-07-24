"use client";

import React from "react";
import Link from "next/link";
import { Wallet, Download, ArrowRight, Shield, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";

export default function HowToGetTokenPage() {
  const steps = [
    {
      number: 1,
      title: "Set up a Phantom Wallet",
      description: "Download and install Phantom wallet for secure token storage.",
      icon: <Wallet className="text-white" size={24} />,
      color: "from-purple-500 to-purple-600",
      details: [
        "Visit phantom.app and download the extension or mobile app",
        "Create a new wallet and securely store your seed phrase",
        "Fund your wallet with SOL for transaction fees",
      ],
      link: "https://phantom.app",
      linkText: "Download Phantom",
    },
    {
      number: 2,
      title: "Buy SOL",
      description: "Purchase SOL on a major exchange and transfer to your wallet.",
      icon: <Download className="text-white" size={24} />,
      color: "from-blue-500 to-blue-600",
      details: [
        "Use exchanges like Coinbase, Binance, or KuCoin",
        "Buy SOL with your preferred payment method",
        "Transfer SOL to your Phantom wallet address",
      ],
    },
    {
      number: 3,
      title: "Swap SOL for ANTCO",
      description: "Use Jupiter or Raydium to swap your SOL for ANTCO tokens.",
      icon: <ArrowRight className="text-white" size={24} />,
      color: "from-green-500 to-green-600",
      details: [
        "Connect your wallet to Jupiter or Raydium",
        "Select SOL as input and ANTCO as output",
        "Confirm the transaction and wait for completion",
      ],
      link: "https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E",
      linkText: "Swap on Jupiter",
    },
    {
      number: 4,
      title: "Add ANTCO to Wallet",
      description: "Manually add the ANTCO token to see your balance.",
      icon: <CheckCircle className="text-white" size={24} />,
      color: "from-orange-500 to-orange-600",
      details: ["Copy the ANTCO contract address below", "Add custom token in your Phantom wallet", "Paste the contract address to display ANTCO"],
    },
  ];

  const exchanges = [
    { name: "Jupiter", url: "https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E", primary: true },
    { name: "Raydium", url: "https://raydium.io/swap", primary: false },
    { name: "Orca", url: "https://www.orca.so", primary: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-4 mb-8">
            <Wallet className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
            How to Get ANTCO
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Step-by-step guide to acquire ANTCO tokens and join the community-driven developer ecosystem on Solana.
          </p>
        </div>

        {/* Important Notice */}
        <div className="backdrop-blur-lg bg-yellow-500/10 dark:bg-yellow-400/10 border border-yellow-500/20 rounded-3xl p-6 mb-12 shadow-xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-2">Important Security Notice</h3>
              <p className="text-yellow-600 dark:text-yellow-400">
                Always verify the contract address and never share your private keys. Only use official links and trusted exchanges.
              </p>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">ANTCO Contract Address</h2>
          <div className="bg-gray-800 dark:bg-gray-700 rounded-xl p-4 text-center">
            <code className="text-orange-400 text-lg font-mono break-all">CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E</code>
            <button
              onClick={() => navigator.clipboard.writeText("CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E")}
              className="ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-orange-500 bg-orange-100 dark:bg-orange-900 px-3 py-1 rounded-full">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>

                  <div className="space-y-3 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300">{detail}</p>
                      </div>
                    ))}
                  </div>

                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                      {step.linkText}
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Exchanges */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Where to Trade ANTCO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exchanges.map((exchange, index) => (
              <a
                key={index}
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  exchange.primary
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-gray-800/60"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{exchange.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span>Trade Now</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Security Tips */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Shield className="text-orange-500" size={32} />
            Security Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">✅ Do</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Always verify contract addresses</li>
                <li>• Use official website links only</li>
                <li>• Keep your seed phrase secure</li>
                <li>• Double-check transaction details</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">❌ Don&apos;t</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Share your private keys</li>
                <li>• Use suspicious websites</li>
                <li>• Ignore transaction warnings</li>
                <li>• Rush through transactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Join thousands of developers already using ANTCO to build the future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Buy ANTCO Now
            </a>
            <Link
              href="/whitepaper"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
