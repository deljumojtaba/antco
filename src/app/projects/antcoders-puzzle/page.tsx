"use client";

import Image from "next/image";
import Link from "next/link";
import { Puzzle, ExternalLink, Gamepad2, Wallet, BarChart, Trophy, Star } from "lucide-react";

export default function AntCodersPuzzlePage() {
  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8 text-orange-500" />,
      title: "Multiple Difficulties",
      description: "Challenge yourself with board sizes from 3x3 (Easy) all the way up to 10x10 (Legend).",
    },
    {
      icon: <Wallet className="w-8 h-8 text-green-500" />,
      title: "Solana Wallet Integration",
      description: "Connect your Phantom or Solflare wallet to save your progress, track stats, and earn rewards.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: "Player Profiles & Stats",
      description: "Track your total score, puzzles solved, best times, and see your global rating.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Achievements & Records",
      description: "Unlock achievements for completing milestones and compete for the best records on each puzzle size.",
    },
    {
      icon: <Star className="w-8 h-8 text-purple-500" />,
      title: "In-Game Hints",
      description: "Stuck on a tough puzzle? Use your in-game score to purchase hints and keep the fun going.",
    },
    {
      icon: <Puzzle className="w-8 h-8 text-red-500" />,
      title: "Modern & Responsive UI",
      description: "Enjoy a clean, intuitive, and mobile-friendly interface that works perfectly on any device.",
    },
  ];

  const techStack = ["HTML5", "CSS3", "JavaScript", "React (implied)", "Solana Web3.js"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl p-4 mb-6 shadow-lg">
            <Puzzle className="text-white" size={48} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-4">
            AntCoders Puzzle
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A classic sliding puzzle game with a modern twist, integrated with the Solana blockchain.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description & Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <section>
              <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About the Game</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    AntCoders Puzzle is our take on the timeless sliding puzzle game, reimagined for the Web3 era. It&apos;s more than just a game;
                    it&apos;s an experience designed to be fun, challenging, and rewarding. Players can enjoy the classic puzzle-solving gameplay
                    while leveraging the power of the Solana blockchain to save their progress, build a player profile, and earn rewards.
                  </p>
                  <p>
                    Whether you&apos;re a casual player looking for a quick brain-teaser or a competitive puzzler aiming for the top of the
                    leaderboards, AntCoders Puzzle offers something for everyone. With a sleek, modern interface and seamless wallet integration, it
                    bridges the gap between traditional web games and the decentralized future.
                  </p>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Info Card */}
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-8">
              <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 rounded-3xl p-6 shadow-xl">
                <div className="flex flex-col items-center mb-6">
                  <Image src="/antcoders-logo.png" alt="AntCoders Puzzle Logo" width={80} height={80} className="rounded-2xl mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Project Info</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600 dark:text-gray-400">Status:</span>
                    <span className="font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-medium text-gray-900 dark:text-white">Game / Utility</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600 dark:text-gray-400">Developer:</span>
                    <span className="font-medium text-gray-900 dark:text-white">AntCoders Team</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-600 dark:text-gray-400 mb-3 text-center">Tech Stack</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://puzzle.antcoders.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Play Now
                  </a>
                  <Link
                    href="/projects"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-xl font-semibold transition-all duration-200 hover:bg-gray-200/70 dark:hover:bg-gray-700/70"
                  >
                    Back to Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 ANTCO Projects. Built by the community, for the community.</p>
        </footer>
      </div>
    </div>
  );
}
