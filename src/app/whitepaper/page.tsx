import React from "react";

export const metadata = {
  title: "ANTCO Whitepaper | ANTCO TOKEN",
  description: "The official whitepaper for ANTCO, the community-driven Solana token for developers.",
};

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a23] via-[#181830] to-[#1a1a40] text-white p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white/10 border border-gray-700 rounded-2xl shadow-lg p-6 sm:p-10 mt-10 mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FFD600] mb-6 text-center drop-shadow-lg">ANTCO Whitepaper</h1>
        <section className="prose prose-invert max-w-none text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFD600] mt-10 mb-4 text-center drop-shadow-lg">
            ANTCO Tokenomics: Distribution and Allocation
          </h2>
          <p>
            The ANTCO token has a carefully planned distribution to ensure the project’s growth, community engagement, and long-term sustainability.
            Below is the detailed breakdown of the total supply and its allocation:
          </p>
          <ul>
            <li>
              <b>Total Supply:</b> 7,770,000,000 ANTCO tokens
            </li>
            <li>
              <b>Airdrop Allocation:</b> 770,000,000 ANTCO tokens (approximately 9.91% of the total supply)
              <br />
              This portion is dedicated to an airdrop campaign aimed at rewarding early supporters, particularly developers and tech enthusiasts, to
              foster community growth and adoption. The airdrop will incentivize active participation and help distribute tokens widely within the
              Solana ecosystem.
            </li>
            <li>
              <b>Team Reserve:</b> 1,000,000,000 ANTCO tokens (approximately 12.87% of the total supply)
              <br />
              This allocation is reserved for the development team to strengthen the project. These funds will support ongoing development,
              partnerships, marketing efforts, and other initiatives to enhance ANTCO’s infrastructure and ensure its success as a developer-focused
              platform in Web3.
            </li>
            <li>
              <b>Liquidity Pool Injection:</b> 6,000,000,000 ANTCO tokens (approximately 77.22% of the total supply)
              <br />
              The remaining tokens will be injected into liquidity pools on decentralized exchanges (DEXs) like Raydium to ensure sufficient liquidity
              for trading. This large allocation aims to facilitate smooth transactions, reduce slippage, and attract traders, thereby increasing the
              token’s trading volume and accessibility. For example, the official Raydium pool (address:{" "}
              <span className="break-all">B2bXGFaHDTuv7HCNEaHywuFRvVx6vkSfKEVk4k34VWkH</span>) has already been seeded with liquidity to support early
              trading.
            </li>
          </ul>
          <p>
            We’re thrilled to introduce <b>ANTCO</b>, the first community-driven token on Solana designed specifically for developers and tech
            enthusiasts like you! Whether you’re a coder, a blockchain builder, or just passionate about Web3 innovation, ANTCO is here to empower you
            to support, collaborate, and grow within the Solana ecosystem. Here’s why you should check it out:
          </p>
          <h2>What is ANTCO?</h2>
          <p>
            ANTCO is more than just a token—it’s a movement to unite developers globally. Built on Solana, ANTCO offers a zero-tax, fair-launch model
            with a big vision to foster collaboration and innovation in Web3 development. We aim to create a transparent ecosystem where devs can
            support each other through donations, shared projects, and community-driven initiatives. Our token is live and trading on Raydium, and
            we’d love for you to join us!
          </p>
          <h3>Key Details</h3>
          <ul>
            <li>
              <b>Token Name:</b> AntCoders Token
            </li>
            <li>
              <b>Symbol:</b> ANTCO
            </li>
            <li>
              <b>Contract Address:</b> CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E
            </li>
            <li>
              <b>Decimals:</b> 7
            </li>
            <li>
              <b>Network:</b> Solana
            </li>
            <li>
              <b>Raydium Pool:</b>{" "}
              <a
                href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CV9oNz7rjTqCsWHHgqWhoZaaw1LSX96H81Vk5p94Hc2E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#19FB9B] underline"
              >
                Swap ANTCO Here
              </a>
            </li>
            <li>
              <b>Website:</b>{" "}
              <a href="https://antcoders.dev" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] underline">
                antcoders.dev
              </a>
            </li>
          </ul>
          <h3>Why Join ANTCO?</h3>
          <ul>
            <li>
              <b>For Devs, By Devs:</b> ANTCO is built to support the developer community with resources, collaboration opportunities, and a platform
              to showcase your projects.
            </li>
            <li>
              <b>Zero Tax:</b> No hidden fees—every transaction is fair and transparent.
            </li>
            <li>
              <b>Fair Launch:</b> No pre-sales or insider deals, just a community-first approach.
            </li>
            <li>
              <b>Web3 Focus:</b> We’re passionate about empowering the next generation of blockchain developers to build on Solana.
            </li>
          </ul>
          <h3>How to Get ANTCO</h3>
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
          <h3>Get Involved!</h3>
          <ul>
            <li>
              <b>Trade ANTCO:</b> Help boost our trading volume by swapping on Raydium.
            </li>
            <li>
              <b>Add Liquidity:</b> Support the ecosystem and earn fees by adding liquidity to our pool.
            </li>
            <li>
              <b>Join the Community:</b> Follow us on{" "}
              <a href="https://x.com/AntCodersToken" target="_blank" rel="noopener noreferrer" className="text-[#FFD600] underline">
                Twitter
              </a>
              , join our{" "}
              <a href="https://t.me/antcoderstoken" target="_blank" rel="noopener noreferrer" className="text-[#19FB9B] underline">
                Telegram
              </a>
              , or visit our site for updates on airdrops and dev-focused events.
            </li>
          </ul>
          <p>Let’s build the future of Web3 together! What do you think, r/Solana? Any devs here want to collaborate or share ideas? 🚀</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-[#9945FF] bg-opacity-30 rounded px-3 py-1 text-xs font-mono">#Solana</span>
            <span className="bg-[#19FB9B] bg-opacity-30 rounded px-3 py-1 text-xs font-mono">#ANTCO</span>
            <span className="bg-[#FFD600] bg-opacity-30 rounded px-3 py-1 text-xs font-mono">#Web3</span>
            <span className="bg-[#00B4FC] bg-opacity-30 rounded px-3 py-1 text-xs font-mono">#Developers</span>
          </div>
        </section>
      </div>
    </main>
  );
}
