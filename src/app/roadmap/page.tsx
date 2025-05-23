import React from "react";
import Image from "next/image";

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#181830] to-[#1a1a40] text-white p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white/10 border border-gray-700 rounded-2xl shadow-lg p-6 sm:p-10 mt-10 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FFD600] mb-6 text-center drop-shadow-lg">Roadmap</h1>
        <p className="text-center text-lg sm:text-xl mb-6">Empowering Developers with ANTCO — A Token Built for Builders</p>
        <Image
          src="/globe.svg" // Corrected path to reference the public folder
          alt="Roadmap Illustration"
          className="mx-auto mb-6"
          width={200}
          height={200}
        />
        <section className="prose prose-invert max-w-none text-white">
          <h2 className="text-2xl font-bold mb-4">Q2 2025 — Foundation & Launch</h2>
          <ul>
            <li>Launch of the ANTCO token on Solana</li>
            <li>Creation of the official liquidity pool on Raydium</li>
            <li>Airdrop campaign for developers and early supporters</li>
            <li>Launch of official website, whitepaper, Telegram, and X (Twitter)</li>
            <li>Token listing on token tracking platforms</li>
          </ul>
          <hr className="my-4 border-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Q3 2025 — Ecosystem Growth</h2>
          <ul>
            <li>Launch of our first dApp powered by ANTCO — a trading journal designed for crypto traders</li>
            <li>Open source SDKs and tools to help developers integrate ANTCO into their projects</li>
            <li>Enable in-app rewards and microtransactions using ANTCO</li>
            <li>Begin outreach to indie developers and open-source projects</li>
          </ul>
          <hr className="my-4 border-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Q4 2025 — Adoption & Developer Network</h2>
          <ul>
            <li>Launch Dev Grants Program to fund apps that use ANTCO</li>
            <li>Form partnerships with Web3 dev communities and DAOs</li>
            <li>Enable ANTCO tipping and donation systems for open-source contributors</li>
            <li>Start integration of ANTCO into code marketplaces and freelance platforms</li>
          </ul>
          <hr className="my-4 border-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Q1 2026 — Expansion & Utility</h2>
          <ul>
            <li>Launch second and third apps powered by ANTCO (community-voted)</li>
            <li>ANTCO wallet features: payment request links, reward distribution, analytics</li>
            <li>Begin pilot programs for developer hackathons with ANTCO prizes</li>
            <li>Explore cross-chain solutions to bring ANTCO to more networks</li>
          </ul>
          <hr className="my-4 border-gray-600" />
          <h2 className="text-2xl font-bold mb-4">Ongoing Goals</h2>
          <ul>
            <li>Grow and empower a global developer-first community</li>
            <li>Make ANTCO the default token for Web3 dev rewards and in-app utilities</li>
            <li>Keep building, together with the community</li>
          </ul>
        </section>
        <p className="text-center text-lg sm:text-xl mt-6">
          Join us as we redefine how developers build, collaborate, and get rewarded.
          <br />
          <span className="font-bold">ANTCO is more than a token — it’s a movement.</span>
        </p>
      </div>
    </main>
  );
}
