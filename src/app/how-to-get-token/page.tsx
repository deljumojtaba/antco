import React from "react";

export const metadata = {
  title: "How to Get ANTCO | ANTCO TOKEN",
  description: "Step-by-step guide on how to acquire ANTCO tokens, the community-driven Solana token for developers.",
};

export default function HowToGetTokenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#181830] to-[#1a1a40] text-white p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white/10 border border-gray-700 rounded-2xl shadow-lg p-6 sm:p-10 mt-10 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FFD600] mb-6 text-center drop-shadow-lg">How to Get ANTCO</h1>
        <section className="prose prose-invert max-w-none text-white">
          <ol>
            <li>
              Set up a Phantom wallet (
              <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className="text-[#19FB9B] underline">
                phantom.app
              </a>
              ).
            </li>
            <li>Buy SOL on an exchange (e.g., Coinbase, KuCoin) and transfer it to your wallet.</li>
            <li>Visit Raydium, connect your wallet, and swap SOL for ANTCO using the pool link above.</li>
            <li>If ANTCO doesn’t show in your wallet, add it manually with the contract address (listed above).</li>
          </ol>
        </section>
        <section className="prose prose-invert max-w-none text-white mt-8">
          <h2 className="text-2xl font-bold text-[#FFD600] mb-4">How to Buy and Sell ANTCO Token</h2>
          <h3 className="text-xl font-semibold mb-2">Step 1: Set Up a Wallet</h3>
          <p>
            First, you need a wallet that supports Solana tokens. We recommend using Phantom wallet.
            <br />
            <a href="https://phantom.app" target="_blank" rel="noopener noreferrer" className="text-[#19FB9B] underline">
              Download Phantom: https://phantom.app
            </a>
          </p>
          <h3 className="text-xl font-semibold mb-2">Step 2: Get SOL (Solana)</h3>
          <p>To buy ANTCO, you need SOL in your wallet. You can purchase SOL from centralized exchanges like:</p>
          <ul>
            <li>Binance</li>
            <li>KuCoin</li>
            <li>Coinbase</li>
            <li>OKX</li>
          </ul>
          <p>Then, transfer the SOL to your Phantom wallet address.</p>
          <hr className="my-4 border-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Step 3: Swap SOL for ANTCO on Raydium</h3>
          <p>Go to the official ANTCO pool on Raydium:</p>
          <h4 className="text-lg font-semibold mb-2">Buy ANTCO on Raydium</h4>
          <ol>
            <li>Connect your Phantom wallet to Raydium.</li>
            <li>Choose how much SOL you want to swap.</li>
            <li>Click Swap to get ANTCO in return.</li>
          </ol>
          <hr className="my-4 border-gray-600" />
          <h3 className="text-xl font-semibold mb-2">Step 4: Add ANTCO to Your Wallet (if needed)</h3>
          <p>If you don’t see ANTCO in your wallet, you can manually add it:</p>
          <ul>
            <li>Token Address: CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E</li>
            <li>Decimals: 7</li>
            <li>Network: Solana</li>
          </ul>
          <hr className="my-4 border-gray-600" />
          <h3 className="text-xl font-semibold mb-2">How to Sell ANTCO</h3>
          <ol>
            <li>Go back to Raydium Swap.</li>
            <li>Set input token to ANTCO and output token to SOL.</li>
            <li>Enter the amount you want to sell.</li>
            <li>Click Swap to convert ANTCO back to SOL.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
