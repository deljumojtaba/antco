"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  BarChart3,
  Calculator,
  Shield,
  Star,
  TrendingUp,
  FileText,
  DownloadCloud,
  Copy,
  CheckCircle,
} from "lucide-react";

export default function AntLogPage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(text);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const walletAddresses = [
    { label: "Solana", address: "66SZQA9sMcjB6am9jvUkUyCwCv6UXCZWdthDN5M7CDXm" },
    { label: "Ethereum (ERC20)", address: "0xD7f8b50b2ee36860CAB600D185c3Efc39f1E0Fbc" },
    { label: "Bitcoin", address: "1HbDNKm37VEhKpMuswTcMEPFqkP8Tpnen5" },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Structured Trade Records",
      description:
        "Record every trade with entry/exit, position size, broker, timeframe, risk params and psychological notes for better post-mortems.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calculator,
      title: "Position Sizing & R:R",
      description: "Built-in position sizing, risk management and R:R calculators before placing trades.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Total P&L, win rate, streaks, drawdowns and pair-level performance summaries.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Session-based privacy and secure data management with optional exports.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: FileText,
      title: "Export & Reports",
      description: "Export trading history and PDF/CSV reports for personal or professional analysis.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Cross-Market Support",
      description: "Crypto, Forex, Commodities (gold, oil, silver) and Stocks — all in one journal.",
      color: "from-teal-500 to-teal-600",
    },
  ];

  const specs = [
    { label: "Platform", value: "Web Dashboard (PWA)" },
    { label: "Markets", value: "Crypto · Forex · Commodities · Stocks" },
    { label: "Key Tools", value: "Analytics · Calculators · Export" },
    { label: "Focus", value: "Data-driven trade journaling" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>

        {/* Hero */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl mb-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                  A
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">AntLog</h1>
                  <div className="mt-1 text-sm text-gray-300">
                    Trading journal, performance analytics, and compound calculators — built for traders.
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6">
                AntLog is a next-generation smart trading journal built for traders who want to track, analyze, and optimize performance across
                crypto, forex, commodities, and stocks. It goes beyond spreadsheets by structuring each trade and providing data-driven insights that
                accelerate learning.
              </p>

              <div className="mb-4 text-sm text-gray-300">
                <strong>Record every trade</strong> — entry/exit prices, position size, broker, timeframe, risk parameters, and psychological state.
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://antlog.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:scale-[1.02] transition-transform"
                >
                  <Globe size={18} />
                  Visit Live
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://github.com/antcoders/antlog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10"
                >
                  <Github size={16} />
                  View Source
                </a>
              </div>
            </div>

            <div className="w-full lg:w-80">
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4">Project Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400 font-semibold">🟢 Early Access</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Version</span>
                    <span className="text-white">v0.9.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Focus</span>
                    <span className="text-white">Journal & Analytics</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400" />
                      <span className="text-white">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-gray-300 mb-6">Small, focused set of tools designed to help traders log and grow.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${f.color} rounded-xl flex items-center justify-center mb-4`}>
                  <f.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Technical Specs</h2>
          <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specs.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-400">{s.label}</span>
                  <span className="text-white font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Snapshot */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Analytics Snapshot</h2>
          <p className="text-gray-300 mb-6">Quick view of the most important trading metrics generated from your journal.</p>

          {/* Support moved to bottom of page */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">BTC/USDT</span>
                <span className="font-semibold text-white">+8.2%</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">EUR/USD</span>
                <span className="font-semibold text-white">+3.1%</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">GOLD</span>
                <span className="font-semibold text-white">-1.4%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <TrendingUp /> Personalized Summary
            </h3>
            <p className="text-gray-300 text-sm mb-3">AI-powered summary highlights strengths, recurring mistakes, and improvement suggestions.</p>
            <div className="text-sm text-gray-300">• Improves risk management after 3 months of journaling.</div>
          </div>
        </div>

        {/* Calculators */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Built-in Calculators</h2>
          <p className="text-gray-300 mb-6">Position sizing, risk management, and R:R evaluation to help you plan trades with confidence.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
              <div className="flex items-center gap-3 mb-3">
                <Calculator />
                <h4 className="font-bold text-white">Position Sizing</h4>
              </div>
              <p className="text-sm text-gray-300 mb-4">Determine correct position size based on risk per trade and account equity.</p>
              <div className="text-sm text-gray-400">Input: Account, Risk %, Stop Loss</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp />
                <h4 className="font-bold text-white">R:R Evaluator</h4>
              </div>
              <p className="text-sm text-gray-300 mb-4">Estimate reward to risk before placing a trade and see expected outcomes.</p>
              <div className="text-sm text-gray-400">Input: Entry, Stop, Target</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
              <div className="flex items-center gap-3 mb-3">
                <Shield />
                <h4 className="font-bold text-white">Risk Manager</h4>
              </div>
              <p className="text-sm text-gray-300 mb-4">Aggregate portfolio-level risk and suggested exposure limits.</p>
              <div className="text-sm text-gray-400">Input: Positions, Correlation</div>
            </div>
          </div>
        </div>

        {/* Markets & Export */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Markets & Export</h2>
          <p className="text-gray-300 mb-6">Track instruments across markets and export data for further analysis.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
              <h3 className="font-bold text-white mb-2">Supported Markets</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <div>• Crypto pairs (BTC/USDT, SOL/USDT, etc.)</div>
                <div>• Forex majors & minors (EUR/USD, GBP/USD)</div>
                <div>• Commodities (Gold, Oil, Silver)</div>
                <div>• Stocks & ETFs</div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/6">
              <h3 className="font-bold text-white mb-2">Export & Reports</h3>
              <p className="text-gray-300 text-sm mb-4">
                Generate CSV or PDF reports of your trading history for audits, taxes, or coaching reviews.
              </p>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">
                  <DownloadCloud /> Export CSV
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg border border-white/6">
                  <FileText /> Generate PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Support / Donations (moved to page end) */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 text-center">💝 Support Our Work</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>• 🔧 Add new features and improvements</p>
                <p>• 🐛 Fix bugs and enhance performance</p>
                <p>• 📚 Maintain comprehensive documentation</p>
                <p>• 🛡️ Keep security measures up to date</p>
                <p>• 🌟 Support the open source community</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Donation Addresses</h3>
              <div className="space-y-3">
                {walletAddresses.map((w, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-3">
                    <div className="flex-1">
                      <div className="text-xs text-gray-400">{w.label}</div>
                      <code className="text-xs font-mono text-green-400 break-all">{w.address}</code>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyToClipboard(w.address)}
                        className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                        title={`Copy ${w.label} address`}
                      >
                        {copiedAddress === w.address ? <CheckCircle size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-white/5 rounded-2xl p-8 border border-white/6 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Try AntLog</h3>
          <p className="text-gray-300 mb-6">Start a free account and begin tracking your trades today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://antlog.app/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold"
            >
              Create Account
            </a>
            <Link href="/projects" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
