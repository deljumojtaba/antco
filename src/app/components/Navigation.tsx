"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            href="/"
            className={`hover:underline px-4 py-2 rounded-lg transition-colors ${pathname === "/" ? "bg-[#FFD600] text-black" : "hover:bg-gray-700"}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/how-to-get-token"
            className={`hover:underline px-4 py-2 rounded-lg transition-colors ${
              pathname === "/how-to-get-token" ? "bg-[#FFD600] text-black" : "hover:bg-gray-700"
            }`}
          >
            How to Get ANTCO
          </Link>
        </li>
        <li>
          <Link
            href="/roadmap"
            className={`hover:underline px-4 py-2 rounded-lg transition-colors ${
              pathname === "/roadmap" ? "bg-[#FFD600] text-black" : "hover:bg-gray-700"
            }`}
          >
            Roadmap
          </Link>
        </li>
        <li>
          <Link
            href="/whitepaper"
            className={`hover:underline px-4 py-2 rounded-lg transition-colors ${
              pathname === "/whitepaper" ? "bg-[#FFD600] text-black" : "hover:bg-gray-700"
            }`}
          >
            Whitepaper
          </Link>
        </li>
        <li>
          <Link
            href="/airdrops"
            className={`hover:underline px-4 py-2 rounded-lg transition-colors ${
              pathname === "/airdrops" ? "bg-[#FFD600] text-black" : "hover:bg-gray-700"
            }`}
          >
            Airdrops
          </Link>
        </li>
      </ul>
    </nav>
  );
}
