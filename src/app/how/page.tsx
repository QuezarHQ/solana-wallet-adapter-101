import React from "react";

const How = () => {
  return (
    <div className="border flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold m-10">
        How to Use the Solana Wallet Adapter in Three Simple Steps
      </h1>
      <br />
      <div className="w-3/4">
        <p>
          Ready to dive into integrating the Solana Wallet Adapter into your dApp? Here&apos;s a casual, step-by-step guide to get you started
        </p>
        <br />
        <ul className="p-5">
          <li>
            <h3 className="text-lg font-bold m-2">
              Step 1: Install Necessary Packages
            </h3>
            <p>
              Grab your favorite code editor, open up your project, and let&apos;s get to it! First, you&apos;ll want to make sure you have the necessary packages installed. Fire up your terminal and run:
            </p>
            <div className="bg-gray-800 text-white p-5 m-2 border rounded-lg">
              <code>
                bash npm install @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-wallets
              </code>
            </div>
            <p>
              These packages are the secret sauce that makes the Solana Wallet Adapter tick.
            </p>
          </li>
          <br />
          <li>
            <h3 className="text-lg font-bold m-2">
              Step 2: Add Required Configuration Files
            </h3>
            <p>
              Now, let&apos;s get your configuration files in order. You&apos;ll need to include the adapter in your React app, so go ahead and import it:
            </p>
            <div className="bg-gray-800 text-white p-5 m-2 border rounded-lg">
              <code>
                import statements
              </code>
            </div>
            <p>
              Next, you&apos;ll want to set up your wallet provider with the supported wallets. For example, if you want to enable Phantom and Sollet, your code might look something like this:
            </p>
          </li>
          <br />
          <li>
            <h3 className="text-lg font-bold m-2">
              Step 3: Include Wallet Buttons
            </h3>
            <p>
              Now comes the fun part! It&apos;s time to include the wallet buttons in your dApp. You can easily do this by adding the following code wherever you want the wallet buttons to appear:
            </p>
          </li>
        </ul>
        <br />
        <p>
          That&apos;s it! With these three simple steps, you&apos;ve successfully integrated the Solana Wallet Adapter into your dApp. Your users can now connect their favorite wallets with ease. Happy coding! 😎🚀
        </p>
      </div>
      <br />
    </div>
  );
};

export default How;
