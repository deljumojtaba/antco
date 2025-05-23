"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-gray-900 text-white p-4 shadow-md">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                href="/"
                className={`hover:underline px-4 py-2 rounded-lg transition-colors ${
                  pathname === "/" ? "bg-[#FFD600] text-black" : "hover:bg-gray-700"
                }`}
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
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
