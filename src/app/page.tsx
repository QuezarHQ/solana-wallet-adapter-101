import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="bg-neutral rounded-full text-5xl text-center font-black p-10">
        Welcome to the Solana Wallet Adapter 101!
      </h1>
      <h2 className="text-2xl text-center font-medium m-5">
        🚀 Power Up Your dApp with Solana Wallet Adapter 🚀
      </h2>

      <div className="w-2/3 p-20">
        <p>Explore the Solana Wallet Adapter with ease:</p>
        <br />
        <ul className="p-5">
          <li>
            <h4 className="font-bold">Discover It 🌟</h4>
            <p>- Understand what the Solana Wallet Adapter is and how it can elevate your dApp.</p>
          </li>
          <br />
          <li>
            <h4 className="font-bold">Integrate It  🧰</h4>
            <p>- Step-by-step instructions on seamlessly integrating the adapter into your dApp.</p>
          </li>
          <br />
          <li>
            <h4 className="font-bold">Experience It 👀</h4>
            <p>- See real-world examples and unleash its potential in your project.</p>
          </li>
        </ul>
        <br />
        <p>Elevate your Solana dApp game – <Link href="/what" className="underline">let's dive in</Link>!</p>
      </div>
    </div>
  );
};

export default Home;
