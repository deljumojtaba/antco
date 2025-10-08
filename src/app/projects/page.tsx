"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Mail,
  Send,
  Copy,
  CheckCircle,
  Rocket,
  Heart,
  Users,
  Github,
  ExternalLink,
  Star,
  Zap,
  TrendingUp,
  Globe,
  Shield,
  AlertTriangle,
  FileText,
  X,
} from "lucide-react";

export default function ProjectsPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Popup modal states
  const [showPopup, setShowPopup] = useState(false);
  const [projectEmail, setProjectEmail] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [isProjectSubmitting, setIsProjectSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Send email to antcoderstoken@gmail.com
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          subject: "New Project Submission Inquiry",
          message: `New project submission inquiry from: ${email}`,
          to: "antcoderstoken@gmail.com",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("Something went wrong. Please try again or contact us directly at antcoderstoken@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("683mvP2pDdA7sXLW6GKfq4ELHf2F5xvVCu1aPAZSwCVi");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!projectEmail || !projectEmail.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (!projectMessage.trim()) {
      alert("Please enter a message about your project");
      return;
    }

    setIsProjectSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: projectEmail,
          subject: "Project Submission Request",
          message: projectMessage,
          to: "antcoderstoken@gmail.com",
        }),
      });

      if (response.ok) {
        alert("Project submission sent successfully! We'll get back to you soon.");
        setProjectEmail("");
        setProjectMessage("");
        setShowPopup(false);
      } else {
        throw new Error("Failed to send submission");
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("Something went wrong. Please try again or contact us directly at antcoderstoken@gmail.com");
    } finally {
      setIsProjectSubmitting(false);
    }
  };

  const placeholderProjects = [
    {
      id: 1,
      title: "Solana Trading Bot",
      description:
        "A sophisticated trading bot for Solana tokens with secure web dashboard interface. Generate natural trading activity with configurable strategies and real-time monitoring.",
      status: "Live",
      category: "Trading",
      developer: "AntCoders Team",
      url: "https://solana-trading-bot.antcoders.dev/",
      slug: "solana-trading-bot",
      featured: true,
    },
    {
      id: 6,
      title: "AntCoders Puzzle",
      description:
        "A classic sliding puzzle game with a modern twist. Challenge yourself with various board sizes, track your stats, and compete for the best scores.",
      status: "Live",
      category: "Game",
      developer: "AntCoders Team",
      url: "https://puzzle.antcoders.dev",
      slug: "antcoders-puzzle",
      featured: true,
    },
    {
      id: 5,
      title: "AntLog",
      description: "AntLog — a simple, installable trading journal that helps you record trades, track performance, and improve over time.",
      status: "Live",
      category: "Tool",
      developer: "AntLog Team",
      url: "https://antlog.app",
      slug: "antlog",
      featured: false,
    },
    {
      id: 2,
      title: "DeFi Analytics Dashboard",
      description: "Real-time cryptocurrency analytics and portfolio tracking tool built with React and Web3 integration.",
      status: "Coming Soon",
      category: "DeFi",
      developer: "Anonymous Dev",
    },
    {
      id: 3,
      title: "NFT Marketplace Builder",
      description: "No-code solution for creating custom NFT marketplaces on Solana blockchain.",
      status: "Coming Soon",
      category: "NFT",
      developer: "Anonymous Creator",
    },
    {
      id: 4,
      title: "Smart Contract Auditor",
      description: "Automated security analysis tool for Solana smart contracts with detailed vulnerability reports.",
      status: "Coming Soon",
      category: "Security",
      developer: "Anonymous Security Expert",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl p-4 mb-8">
            <Code className="text-white" size={32} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Build. Share. Get Funded.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Introducing a platform where developers and creators can showcase their projects, even if they don&apos;t have the resources to host it
            themselves.
          </p>
        </div>

        {/* About Section */}
        <div className="mb-20">
          <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Rocket className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We believe in giving power to developers and innovators. When you introduce your project here, the probability of receiving donations
              increases significantly, helping you make your project stronger every day. If you have a creative project but don&apos;t have the budget
              to maintain servers or run your own website, we&apos;re here to help you get visibility and support. We showcase your project, under
              your own name, and help you grow through our ANTCO community. Eventually, your project will be introduced with its own dedicated domain
              at <span className="font-semibold text-orange-600 dark:text-orange-400">yourproject.antcoders.dev</span>, giving you professional
              recognition and increased credibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl">
                <Users className="text-blue-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Community Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get visibility through our growing ANTCO community</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl">
                <Zap className="text-green-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zero Cost Hosting</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We handle the infrastructure, you focus on building</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl">
                <Star className="text-purple-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Your Recognition</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects showcased under your name and brand</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl">
                <Globe className="text-orange-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Professional Domain</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get your own yourproject.antcoders.dev domain</p>
              </div>
            </div>
          </div>
        </div>

        {/* How AntCoders Ecosystem Works */}
        <div className="mb-20">
          <div className="backdrop-blur-lg bg-gradient-to-r from-purple-500/10 to-orange-500/10 dark:from-purple-400/10 dark:to-orange-400/10 border border-purple-500/20 dark:border-purple-400/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Join the AntCoders Ecosystem</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <strong>Where Open Source Meets Real Support</strong>
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
                Are you building an open-source project and want to gain visibility, support, and momentum? At AntCoders, we believe in the power of
                community-driven innovation. We&apos;ve created a platform that empowers developers like you to grow your project with the help of a
                passionate developer community.
              </p>
            </div>

            {/* How It Works Steps */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                <span className="text-2xl">✅</span>
                How It Works
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Submit Your Project</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Whether you&apos;re building an app, a library, a tool, or anything in between — if it&apos;s open source, we want to feature it.
                    Just sign up and submit your GitHub repository or website.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Get Discovered & Supported</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Your project will be listed and promoted for free on AntCoders — connecting you with developers, users, and potential contributors
                    who can help your project grow.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Receive Donations</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Your project will also have a donation section where people who love your work can support you financially.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      4
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Enjoy Free Hosting</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We partner with infrastructure providers to offer free hosting and server resources to help your project stay online and scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Token Requirement Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center flex items-center justify-center gap-3">
                  <span className="text-2xl">🪙</span>
                  Why the $1 Token Requirement?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                  To prevent abuse and ensure community integrity, we ask all developers to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/30 dark:bg-gray-800/30 rounded-xl p-4">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-3">
                        <span className="text-blue-500 font-bold">•</span>
                        Create a wallet
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-blue-500 font-bold">•</span>
                        Purchase at least $1 worth of ANTCO (AntCoders Token)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/30 dark:bg-gray-800/30 rounded-xl p-4">
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">This small contribution:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        Helps grow the ecosystem
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        Shows commitment
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        Grants access to all community benefits
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="text-blue-500" size={24} />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Important Note</h4>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">📌 We do not take ownership or control of your project.</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Your project remains entirely yours — AntCoders makes no financial or intellectual claim on your work.
                </p>
              </div>
            </div>

            {/* Built by Developers */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3">
                  <span className="text-2xl">🤝</span>
                  Built by Developers, for Developers
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Whether you&apos;re a solo hacker or a small team with big dreams, AntCoders is here to help you launch, grow, and thrive — all with
                  the support of like-minded devs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth & Donation Benefits Section */}
        <div className="mb-20">
          <div className="backdrop-blur-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-400/10 dark:to-blue-400/10 border border-green-500/20 dark:border-green-400/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Grow Your Project Every Day</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                When you showcase your project through our platform, you unlock powerful growth opportunities that help you build stronger, more
                sustainable projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">💰 Increased Donation Probability</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Higher Visibility</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">More exposure leads to more potential supporters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Community Trust</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">ANTCO endorsement builds credibility with donors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Professional Presence</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Professional showcase increases donor confidence</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">🚀 Daily Growth Opportunities</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Regular Updates</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Keep your community engaged with progress updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Feedback Loop</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Get valuable feedback to improve your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Network Effects</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Connect with other developers and collaborators</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">🌐 Professional Evolution</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Custom Domain</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Eventually get yourproject.antcoders.dev</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Brand Recognition</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Build your project&apos;s brand with professional presence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Long-term Success</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Sustainable growth through community support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-2xl px-6 py-4 inline-block">
                <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                  💡 The more you engage with our community, the stronger your project becomes!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Guidelines Section */}
        <div className="mb-20">
          <div className="backdrop-blur-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-400/10 dark:to-orange-400/10 border border-red-500/20 dark:border-red-400/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Shield className="text-red-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Terms & Guidelines</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                To maintain a safe, professional, and supportive environment for all developers, please review our submission guidelines and terms of
                service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project Submission Guidelines */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <FileText className="text-blue-500" size={24} />
                  Project Submission Guidelines
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">✅ Accepted Projects</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Original software projects and applications</li>
                      <li>• Open-source tools and libraries</li>
                      <li>• Educational content and tutorials</li>
                      <li>• Blockchain and Web3 innovations</li>
                      <li>• Mobile and web applications</li>
                      <li>• Developer tools and utilities</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">❌ Prohibited Content</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Plagiarized or copied projects</li>
                      <li>• Malicious software or exploits</li>
                      <li>• Adult or inappropriate content</li>
                      <li>• Pyramid schemes or scams</li>
                      <li>• Gambling or illegal activities</li>
                      <li>• Hate speech or discriminatory content</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal Requirements */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <AlertTriangle className="text-orange-500" size={24} />
                  Legal Requirements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Intellectual Property</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">You must own or have rights to all submitted content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Attribution</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Proper credit must be given to collaborators and dependencies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Compliance</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Projects must comply with applicable laws and regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Privacy</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Respect user privacy and data protection standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms of Service Summary */}
            <div className="mt-8 bg-gradient-to-r from-gray-500/10 to-gray-600/10 border border-gray-500/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Key Terms of Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-blue-500" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quality Standards</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We maintain high quality standards and reserve the right to review all submissions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="text-green-500" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Community Respect</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Maintain respectful communication and professional conduct at all times</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <AlertTriangle className="text-purple-500" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Platform Rights</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ANTCO reserves the right to remove content that violates guidelines</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    By submitting your project, you agree to our terms of service and grant ANTCO permission to showcase your project on our platform.
                    Projects are displayed &apos;as-is&apos; and ANTCO is not responsible for the functionality, security, or legal compliance of
                    individual projects. Users interact with projects at their own risk. We encourage thorough due diligence before using or
                    supporting any project.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    <strong>Last updated:</strong> January 2025 • <strong>Contact:</strong> antcoderstoken@gmail.com for questions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-20">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 border border-blue-500/20 dark:border-blue-400/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Mail className="text-blue-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300">Want to list your project or get in touch? We&apos;d love to hear from you!</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                You can also reach us directly at: <span className="font-mono text-blue-600 dark:text-blue-400">antcoderstoken@gmail.com</span>
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl px-6 py-4">
                  <CheckCircle className="text-green-500" size={24} />
                  <span className="text-green-600 dark:text-green-400 font-semibold">Thanks! We&apos;ll contact you soon.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Donation Section */}
        <div className="mb-20">
          <div className="backdrop-blur-lg bg-gradient-to-r from-orange-500/10 to-pink-500/10 dark:from-orange-400/10 dark:to-pink-400/10 border border-orange-500/20 dark:border-orange-400/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Heart className="text-orange-500" size={32} />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Support Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Your support keeps us going! If you want to help us grow this platform and support independent developers, consider donating with
                ANTCO.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">Donation Wallet Address</h3>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                  <code className="flex-1 text-sm font-mono text-gray-900 dark:text-white break-all">
                    683mvP2pDdA7sXLW6GKfq4ELHf2F5xvVCu1aPAZSwCVi
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
                    title="Copy to clipboard"
                  >
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                {copied && <p className="text-green-600 dark:text-green-400 text-sm text-center mt-2">Copied to clipboard!</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects Powered by ANTCO</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover innovative projects built by our community - featuring live trading bots and more!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {placeholderProjects.map((project) => (
              <div
                key={project.id}
                className={`relative backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  project.status === "Coming Soon" ? "opacity-60" : "opacity-100"
                } ${project.featured ? "ring-2 ring-orange-500/30" : ""}`}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Featured
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      project.category === "Trading"
                        ? "bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 text-green-600 dark:text-green-400"
                        : "bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {project.category}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30"
                        : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">by {project.developer}</span>
                  {project.status === "Live" && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Online</span>
                    </div>
                  )}
                </div>

                {project.status === "Live" ? (
                  <div className="flex gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      <FileText size={14} />
                      Details
                    </Link>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm"
                    >
                      <ExternalLink size={14} />
                      Visit
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-500/20 text-gray-500 dark:text-gray-400 rounded-xl text-sm">
                    <Github size={14} className="opacity-50" />
                    <span>Coming Soon</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowPopup(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
            >
              <Rocket size={20} />
              Submit Your Project
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-700/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Showcase Your Project?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the ANTCO community and get the visibility your project deserves. No hosting costs, no barriers - just pure innovation.
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
              href="/how-to-get-token"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get ANTCO Tokens
            </Link>
          </div>
        </div>

        {/* Project Submission Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-gray-700/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Submit Your Project</h2>
                <button onClick={() => setShowPopup(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  <X size={20} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <form onSubmit={handleProjectSubmit} className="space-y-6">
                <div>
                  <label htmlFor="project-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    id="project-email"
                    type="email"
                    value={projectEmail}
                    onChange={(e) => setProjectEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="project-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="project-message"
                    value={projectMessage}
                    onChange={(e) => setProjectMessage(e.target.value)}
                    placeholder="Please include:&#10;- Project name&#10;- Brief description&#10;- Technology stack&#10;- Project URL or GitHub repo&#10;- Current status&#10;- Any additional details"
                    rows={8}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isProjectSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isProjectSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <Image src="/antcoders-logo.png" alt="ANTCO Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-gray-900 dark:text-white">ANTCO Projects</span>
            </Link>

            <div className="flex items-center gap-6">
              <a
                href="https://x.com/antcoderstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://t.me/antcoderstoken"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://antcoders.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Website
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 ANTCO Projects. Empowering developers worldwide.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
