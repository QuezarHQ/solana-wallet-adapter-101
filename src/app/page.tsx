import React from "react";

const Home = () => {
  return (
    <div className="border border-gray-300 flex flex-col items-center p-10">
      <h1 className="text-5xl text-center font-black m-10">
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
        <p>Elevate your Solana dApp game – let&apos;s dive in!</p>
      </div>
    </div>
  );
};

export default Home;
