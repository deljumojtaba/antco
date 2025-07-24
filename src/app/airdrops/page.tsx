"use client";

import Image from "next/image";
import Link from "next/link";
import { Gift, ExternalLink, CheckCircle, Calendar, Users, TrendingUp } from "lucide-react";

export default function AirdropsPage() {
  const airdropTasks = [
    {
      title: "Like our token on Jupiter",
      description: "Show your support by liking ANTCO on Jupiter Exchange",
      reward: "500 ANTCO",
      difficulty: "Easy",
      url: "https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E",
      completed: false,
    },
    {
      title: "Join our Telegram community",
      description: "Connect with fellow developers in our active community",
      reward: "1,000 ANTCO",
      difficulty: "Easy",
      url: "https://t.me/antcoderstoken",
      completed: false,
    },
    {
      title: "Follow us on X (Twitter)",
      description: "Stay updated with the latest ANTCO news and developments",
      reward: "750 ANTCO",
      difficulty: "Easy",
      url: "https://x.com/AntCodersToken",
      completed: false,
    },
    {
      title: "Share ANTCO on social media",
      description: "Help spread the word about ANTCO to your network",
      reward: "1,500 ANTCO",
      difficulty: "Medium",
      url: "#",
      completed: false,
    },
    {
      title: "Refer 5 friends to join",
      description: "Invite other developers to join the ANTCO ecosystem",
      reward: "5,000 ANTCO",
      difficulty: "Hard",
      url: "#",
      completed: false,
    },
  ];

  const upcomingAirdrops = [
    {
      title: "Developer Contribution Rewards",
      description: "Rewards for developers who contribute to ANTCO ecosystem",
      date: "Q3 2025",
      reward: "Up to 50,000 ANTCO",
    },
    {
      title: "Community Building Campaign",
      description: "Special rewards for active community members",
      date: "Q4 2025",
      reward: "Up to 25,000 ANTCO",
    },
    {
      title: "Partnership Launch Rewards",
      description: "Celebrate new partnerships with bonus airdrops",
      date: "Q1 2026",
      reward: "Up to 75,000 ANTCO",
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
                    <span className="text-green-600 dark:text-green-400 font-semibold">Total Pool: 1,000,000 ANTCO</span>
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
                className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">{task.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(task.difficulty)}`}>{task.difficulty}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{task.description}</p>

                <div className="flex items-center justify-between">
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
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">1M+</div>
                <div className="text-gray-600 dark:text-gray-400">Total Tokens</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15K+</div>
                <div className="text-gray-600 dark:text-gray-400">Participants</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">8.7K</div>
                <div className="text-gray-600 dark:text-gray-400">Tasks Completed</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">750K</div>
                <div className="text-gray-600 dark:text-gray-400">Tokens Distributed</div>
              </div>
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
                className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-blue-500" size={24} />
                  <span className="text-blue-500 font-semibold">{airdrop.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{airdrop.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{airdrop.description}</p>
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl px-4 py-2 text-center">
                  <span className="text-green-600 dark:text-green-400 font-bold">{airdrop.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">How Airdrops Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Complete Tasks</h3>
                <p className="text-gray-700 dark:text-gray-300">Follow our social accounts, join communities, and engage with ANTCO content.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Get Verified</h3>
                <p className="text-gray-700 dark:text-gray-300">Our team verifies your completed tasks to ensure fair distribution.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Receive Tokens</h3>
                <p className="text-gray-700 dark:text-gray-300">ANTCO tokens are automatically sent to your Solana wallet address.</p>
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
              Learn How to Buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
