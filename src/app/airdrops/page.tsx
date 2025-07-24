"use client";

import Image from "next/image";

export default function Airdrops() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a23] via-[#181830] to-[#1a1a40] text-white p-4 sm:p-8">
      <main className="flex flex-col items-center w-full max-w-2xl mx-auto py-12 gap-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFD600] tracking-tight drop-shadow-lg mb-4">Token Airdrops</h1>
        <Image
          src="/airdrop-banner.jpeg"
          alt="ANTCO Token Airdrop Event"
          width={600}
          height={450}
          className="rounded-2xl shadow-lg mb-6 object-cover"
        />
        <div className="rounded-2xl bg-white/10 border border-gray-700 shadow p-6 sm:p-8 flex flex-col gap-4 items-center w-full">
          <h2 className="text-2xl font-bold text-[#FFD600] mb-2 flex items-center gap-2">
            <span>🎁 ANTCO Airdrop</span>
          </h2>
          <ul className="list-disc text-left text-base sm:text-lg ml-6 mb-4">
            <li>
              Like our token on Jupiter
              <a
                href="https://jup.ag/tokens/CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD600] hover:underline ml-2"
              >
                Jupiter Link
              </a>
            </li>
            <li>
              Repost this on X
              <a href="https://x.com/AntCodersToken" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] hover:underline ml-2">
                @AntCodersToken
              </a>
            </li>
            <li>
              Join our Telegram:
              <a href="https://t.me/antcoderstoken" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] hover:underline ml-2">
                Telegram
              </a>
            </li>
            <li>Send your Solana wallet</li>
            <li>
              Get <span className="font-bold text-[#19FB9B]">100,000 $ANTCO</span> tokens!
            </li>
          </ul>
          <a
            href="https://antcoders.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#FFD600] hover:bg-[#bfa600] transition-colors text-black font-bold py-3 px-8 text-center shadow-lg text-lg mt-2"
          >
            Visit antcoders.dev
          </a>
        </div>
      </main>
    </div>
  );
}
