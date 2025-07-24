"use client";

import React from "react";
import Link from "next/link";
import { Calendar, CheckCircle, Clock, Star, TrendingUp } from "lucide-react";

export default function RoadmapPage() {
  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Foundation & Launch",
      status: "completed",
      items: [
        "Launch of the ANTCO token on Solana",
        "Creation of the official liquidity pool on Raydium",
        "Airdrop campaign for developers and early supporters",
        "Launch of official website, whitepaper, Telegram, and X (Twitter)",
        "Token listing on token tracking platforms",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Ecosystem Growth",
      status: "in-progress",
      items: [
        "Launch of our first dApp powered by ANTCO — a trading journal designed for crypto traders",
        "Open source SDKs and tools to help developers integrate ANTCO into their projects",
        "Partnership with major Solana projects and developer communities",
        "Implementation of community governance features",
        "Developer grants program launch",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Community Expansion",
      status: "upcoming",
      items: [
        "Launch of ANTCO Academy — free educational resources for developers",
        "Cross-chain bridge development for multi-chain support",
        "Integration with major development tools and platforms",
        "Global developer meetups and hackathons",
        "Advanced staking and yield farming opportunities",
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Innovation & Scale",
      status: "upcoming",
      items: [
        "AI-powered development tools powered by ANTCO",
        "Decentralized autonomous organization (DAO) full implementation",
        "Enterprise partnerships for large-scale adoption",
        "Advanced analytics and metrics platform",
        "Global expansion and multi-language support",
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" size={24} />;
      case "in-progress":
        return <Clock className="text-orange-500" size={24} />;
      default:
        return <Star className="text-blue-500" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-green-600";
      case "in-progress":
        return "from-orange-500 to-orange-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="w-6 h-0.5 bg-white/60"></div>
              <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="w-6 h-0.5 bg-white/40"></div>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
            ANTCO Roadmap
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering Developers with ANTCO — A Token Built for Builders. Our journey to revolutionize the developer ecosystem.
          </p>
        </div>

        {/* Roadmap Visual */}
        <div className="mb-16">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Roadmap Journey Visual */}
                <div className="flex items-center gap-4">
                  {/* Start Point */}
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="text-white" size={24} />
                  </div>

                  {/* Progress Line */}
                  <div className="w-24 h-2 bg-gradient-to-r from-green-500 via-orange-500 to-blue-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-orange-400/30 to-blue-400/30"></div>
                  </div>

                  {/* Current Progress */}
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="text-white" size={24} />
                  </div>

                  {/* Progress Line */}
                  <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full opacity-60"></div>

                  {/* Future Milestones */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Star className="text-white" size={24} />
                  </div>

                  {/* Final Line */}
                  <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-40"></div>

                  {/* End Goal */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                </div>

                {/* Labels */}
                <div className="flex items-center justify-between mt-4 px-2">
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Q2 2025</span>
                  <span className="text-xs font-medium text-orange-600 dark:text-orange-400">Q3 2025</span>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Q4 2025</span>
                  <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Q1 2026</span>
                </div>
              </div>
            </div>

            {/* Journey Description */}
            <div className="text-center mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Our Development Journey</h3>
              <p className="text-gray-600 dark:text-gray-300">From foundation to innovation — building the future of developer tools with ANTCO</p>
            </div>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < roadmapItems.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700"></div>
              )}

              {/* Roadmap Item */}
              <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  {/* Status Icon */}
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${getStatusColor(item.status)} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar size={20} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-lg font-semibold text-orange-500">{item.quarter}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>

                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            item.status === "completed"
                              ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                              : item.status === "in-progress"
                              ? "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
                              : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          }`}
                        >
                          {item.status === "completed" ? "Completed" : item.status === "in-progress" ? "In Progress" : "Upcoming"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {item.items.map((roadmapItem, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                item.status === "completed" ? "bg-green-500" : item.status === "in-progress" ? "bg-orange-500" : "bg-blue-500"
                              }`}
                            ></div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{roadmapItem}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Stats */}
        <div className="mt-16 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Development Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">25%</div>
              <div className="text-gray-600 dark:text-gray-400">Completed</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">25%</div>
              <div className="text-gray-600 dark:text-gray-400">In Progress</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50%</div>
              <div className="text-gray-600 dark:text-gray-400">Upcoming</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Be part of the ANTCO ecosystem and help shape the future of developer tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/antcoderstoken"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              Join Community
            </a>
            <Link
              href="/whitepaper"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Read Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
