"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/how-to-get-token", label: "How to Get ANTCO" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/whitepaper", label: "Whitepaper" },
    { href: "/tokenomics", label: "Tokenomics" },
    { href: "/airdrops", label: "Airdrops" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 p-1 shadow-lg ring-2 ring-orange-500/20">
              <Image
                src="https://azure-elaborate-narwhal-225.mypinata.cloud/ipfs/bafybeicmbo2og3lhzato76argy5m4t4asolc2rbj2nsvpercejurnezosy"
                alt="ANTCO Logo"
                width={24}
                height={24}
                className="rounded-full"
                unoptimized
              />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">AntCoders</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  pathname === item.href
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 opacity-10 animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20">
        <div className="px-2 pt-2 pb-3 space-y-1 max-w-7xl mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname === item.href ? "bg-primary-500 text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
