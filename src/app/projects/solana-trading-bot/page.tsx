"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  Shield,
  Zap,
  Activity,
  Settings,
  Monitor,
  Lock,
  TrendingUp,
  BarChart3,
  Copy,
  CheckCircle,
  Star,
  FileText,
  AlertTriangle,
  Heart,
} from "lucide-react";

export default function SolanaTradingBotPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Web Dashboard",
      description: "User isolation with automatic data cleanup and session-based security",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Activity,
      title: "Multi-Bot Support",
      description: "Run up to 3 bots simultaneously with different trading strategies",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "Live logs and status updates with beautiful dark theme interface",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Settings,
      title: "Configurable Strategies",
      description: "Balanced, Aggressive, and Conservative trading modes",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "No permanent data storage, automatic cleanup on logout",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Jupiter Integration",
      description: "Best prices through Jupiter aggregator with optimized swap routes",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  // Dynamic Trading Strategies Data - Users can easily modify these
  const tradingStrategies = [
    {
      id: 1,
      name: "Balanced Strategy",
      icon: BarChart3,
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      iconColor: "from-blue-500 to-blue-600",
      features: ["60% Buy / 40% Sell ratio", "Steady trading activity", "Low market impact", "Recommended for beginners"],
    },
    {
      id: 2,
      name: "Aggressive Strategy",
      icon: TrendingUp,
      bgColor: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30",
      iconColor: "from-red-500 to-red-600",
      features: ["75% Buy / 25% Sell ratio", "Strong buying pressure", "Higher volume activity", "For experienced traders"],
    },
    {
      id: 3,
      name: "Conservative Strategy",
      icon: Shield,
      bgColor: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      iconColor: "from-green-500 to-green-600",
      features: ["55% Buy / 45% Sell ratio", "Minimal price impact", "Risk-averse approach", "Perfect for testing"],
    },
  ];

  const specs = [
    { label: "Default Token", value: "CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E" },
    { label: "Platform", value: "Solana Blockchain" },
    { label: "Interface", value: "Web Dashboard" },
    { label: "Max Bots", value: "3 Simultaneous" },
    { label: "Security", value: "Session-based Isolation" },
    { label: "Theme", value: "Dark Mode" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Activity className="text-white" size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">🤖 Solana Trading Bot</h1>
                    <div className="flex items-center gap-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold border border-green-500/30">
                        ✅ Live & Active
                      </span>
                      <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold border border-orange-500/30">
                        Trading Tools
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  A sophisticated trading bot for Solana tokens with a secure web dashboard interface. Generate natural trading activity with
                  configurable strategies and real-time monitoring.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://solana-trading-bot.antcoders.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
                  >
                    <Globe size={20} />
                    Visit Live Demo
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://github.com/deljumojtaba/solana-trading-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    <Github size={20} />
                    View Source
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="lg:w-80">
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">Project Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className="text-green-400 font-semibold">🟢 Live</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Version</span>
                      <span className="text-white">v1.4.2</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">GitHub Stars</span>
                      <span className="text-white">47+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Rating</span>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-current" />
                        ))}
                        <Star size={14} className="text-gray-500" />
                        <span className="text-white ml-1">4.2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">✨ Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Professional-grade trading automation with enterprise security</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🔧 Technical Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700/50">
                    <span className="text-gray-400 font-medium">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FileText size={20} />
                  Default Token Address
                </h3>
                <div className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-4">
                  <code className="flex-1 text-sm font-mono text-green-400 break-all">CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E</code>
                  <button
                    onClick={() => copyToClipboard("CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E")}
                    className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                    title="Copy to clipboard"
                  >
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && <p className="text-green-400 text-sm text-center mt-2">Copied to clipboard!</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Trading Strategies */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">📊 Trading Strategies</h2>
            <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose from multiple pre-configured trading strategies or customize your own.
              <span className="text-orange-400 font-semibold"> These are example configurations</span> - you can modify them to suit your trading
              style.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tradingStrategies.map((strategy) => (
                <div
                  key={strategy.id}
                  className={`bg-gradient-to-br ${strategy.bgColor} border ${strategy.borderColor} rounded-2xl p-6 hover:scale-105 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${strategy.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                    <strategy.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{strategy.name}</h3>
                  <div className="space-y-2 text-gray-300">
                    {strategy.features.map((feature, index) => (
                      <p key={index}>• {feature}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2">
                <AlertTriangle className="text-orange-400" size={16} />
                <span className="text-orange-400 text-sm font-medium">
                  💡 Tip: These strategies are fully customizable through the bot&apos;s configuration files
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 Quick Start Guide</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-white">Install Dependencies</h3>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-green-400 text-sm">npm install</code>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-white">Configure Environment</h3>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-green-400 text-sm">cp .env.example .env</code>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-white">Start Dashboard</h3>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-green-400 text-sm">npm run dashboard</code>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-orange-400" size={24} />
                  Safety Guidelines
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>⚠️ Always test on devnet first</p>
                  <p>💰 Start with small amounts</p>
                  <p>📊 Monitor your SOL balance regularly</p>
                  <p>🔐 Keep private keys secure</p>
                  <p>🚫 Never commit .env files</p>
                </div>

                <div className="mt-6 pt-6 border-t border-orange-500/30">
                  <h4 className="font-bold text-white mb-2">For Public Hosting:</h4>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-green-400 text-sm">npm run dashboard:secure</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Heart className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold text-white">Support Development</h2>
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                This project is developed and maintained by the AntCoders team and provided free as open source software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <h3 className="text-lg font-bold text-white mb-4 text-center">Donation Address</h3>
                <div className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-4">
                  <code className="flex-1 text-xs font-mono text-green-400 break-all">66SZQA9sMcjB6am9jvUkUyCwCv6UXCZWdthDN5M7CDXm</code>
                  <button
                    onClick={() => copyToClipboard("66SZQA9sMcjB6am9jvUkUyCwCv6UXCZWdthDN5M7CDXm")}
                    className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                    title="Copy donation address"
                  >
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of traders using our sophisticated bot to automate their Solana trading strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://solana-trading-bot.antcoders.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              🚀 Launch Trading Bot
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
