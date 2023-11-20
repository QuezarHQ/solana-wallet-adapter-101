import React from "react";

const What = () => {
  return (
    <div className="flex flex-col items-center p-10">

      <h1 className="text-primary rounded-full text-2xl font-bold p-4 m-10">
        Meet the Solana Wallet Adapter: Your Easy Way to Add Multiple Wallets
      </h1>
      <br />
      <div className="w-3/4">
        <p>
          The Solana Wallet Adapter is like the Swiss Army knife for Solana dApp developers. It&apos;s here to make your life simpler when integrating wallets into your dApp. Here&apos;s how it gets the job done in a laid-back, easy-to-understand manner:
        </p>
        <br />
        <ul className="p-5">
        <li>
          <h4 className="font-bold text-primary">Multi-Wallet Magic</h4>
          <br />
          <p>- The Solana Wallet Adapter comes ready to go with support for multiple Solana wallets. No need to sweat over integrating different wallets individually – it&apos;s all bundled up for you. Whether your users prefer Phantom, Sollet, or something else, the adapter has your back.</p>
        </li>
        <br /><br />
        <li>
          <h4 className="font-bold text-primary">Web3.js, Solana Style</h4>
          <br />
          <p> - Just like Metamask injects Web3.js for Ethereum, the Solana Wallet Adapter does the same but with Solana&apos;s Web3.js. This means you can tap into all of Solana&apos;s blockchain powers without breaking a sweat. It&apos;s familiar, it&apos;s easy, and it just works.</p>
        </li>
        <br /><br />
        <li>
          <h4 className="font-bold text-primary">One-Click Functions</h4>
          <br />
          <p>- The Solana Wallet Adapter simplifies wallet interactions with some nifty features that you can plug and play in your dApp:</p>
          <ul className="p-5">
            <li>1. Select Wallet: Let your users choose their favorite wallet hassle-free.</li>
            <li>2. Connect Wallet: Set up a secure connection for transactions and blockchain interactions.</li>
            <li>3. Disconnect Wallet: Give users a quick way to log out, respecting their privacy.</li>
          </ul>
        </li>
      </ul>
      <p>With the Solana Wallet Adapter, you can skip the wallet integration headaches and get back to doing what you love – building the coolest features for your Solana dApp. It&apos;s your ticket to a smooth, wallet-friendly experience for your users.</p>
      <br />
      </div>
    </div>
  );
};

export default What;
