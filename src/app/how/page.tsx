"use client";

import React from "react";
import Codeblock from "@/components/Codeblock";

const How = () => {

  const codeInstallBasePackages = `npm install -D @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-wallets`

  const codeInstallUIPackages = `npm install -D @solana/wallet-adapter-react-ui`

  const codeImportButtons = `
  import { WalletConnectButton } from '@solana/wallet-adapter-react-ui'
  import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'
  import { WalletModalButton } from '@solana/wallet-adapter-react-ui'
  import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
  `

  const codeIncludeButtons = `
  <WalletConnectButton />
  <WalletDisconnectButton />
  <WalletModalButton />
  <WalletMultiButton />
  `

  const codeWalletContextProviderComponent = `
  import { FC, ReactNode } from "react";

  import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
  import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';

  import * as web3 from '@solana/web3.js'
  import * as wallet from '@solana/wallet-adapter-wallets';
  require('@solana/wallet-adapter-react-ui/styles.css')

  const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

      return (
          // we will add more code here
      )
  }

  export default WalletContextProvider
  `

  const codeWallets = `
  const wallets = [
    new wallet.CoinbaseWalletAdapter(),
    new wallet.LedgerWalletAdapter(),
    new wallet.PhantomWalletAdapter(),
  ]
  `

  const codeEndpoint = `const endpoint = web3.clusterApiUrl('devnet')`

  const codeWalletContextProviderSetup = `
  <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
          <ReactUIWalletModalProvider>
              {children}
          </ReactUIWalletModalProvider>
      </WalletProvider>
  </ConnectionProvider>
  `

  const codeWalletContextProviderConfiguration = `
  <html lang="en">
    <body>
        <Header></Header>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
        <Footer></Footer>
    </body>
  </html>
  `

  const languageShell = "shell"
  const languageJSX = "jsx"

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-primary rounded-full text-2xl font-bold p-4 m-10">
        How to Use the Solana Wallet Adapter in Three Simple Steps
      </h1>
      <br />
      <div className="w-3/4">
        <p>
          Ready to dive into integrating the Solana Wallet Adapter into your dApp? Here&apos;s a casual, step-by-step guide to get you started
        </p>
        <br /><hr /><br />
        <ul className="p-5">
          <li>
            <h3 className="text-primary text-lg font-bold m-2">
              Step 1: Install Necessary Packages
            </h3>
            <br />
            <p>
              Grab your favorite code editor, open up your project, and let&apos;s get to it! First, you&apos;ll want to make sure you have the necessary packages installed. Fire up your terminal and run:
            </p>
            <Codeblock code={codeInstallBasePackages} language={languageShell}></Codeblock>
            <p>
              Next, we will install the React UI components package, that will give us some basic functionalities.
            </p>
            <Codeblock code={codeInstallUIPackages} language={languageShell}></Codeblock>
            <p>
              You can install packages for including other UI frameworks as well like Material UI or Ant Design. You'll find a list of other supported frameworks <a href="https://github.com/solana-labs/wallet-adapter/blob/master/PACKAGES.md" className="underline">here</a>.
            </p>
            <br />
            <p>
              These packages are the secret sauce that makes the Solana Wallet Adapter tick.
            </p>
          </li>
          <br /><hr /><br />
          <li>
            <h3 className="text-primary text-lg font-bold m-2">
              Step 2: Add Required Configuration Files
            </h3>
            <br />
            <p>
              Now, let's get your configuration files in order. You'll need to configure a "WalletContextProvider" for your application. So let's get started!
            </p>
            <br />
            <p>
              First, we create a new component, WalletContextProvider.tsx. We will also import some modules necessary for this component to work. You script should look something like this:
            </p>
            <Codeblock code={codeWalletContextProviderComponent} language={languageJSX}></Codeblock>
            <p>
              Now we will add the wallets we want our dapp to support. Here we are adding support for the Coinbase, Ledger & Phantom wallets. You can add any other wallet from the <a href="https://github.com/solana-labs/wallet-adapter/blob/master/PACKAGES.md#wallets" className="underline">list</a> of supported wallets as well. 
            </p>
            <Codeblock code={codeWallets} language={languageJSX}></Codeblock>
            <p>
              Next we set the network we want our dapp to connect to: 'devnet', 'testnet' or 'mainnet-beta'
            </p>
            <Codeblock code={codeEndpoint} language={languageJSX}></Codeblock>
            <p>
              At last, we finish our component by returning the following code via our component:
            </p>
            <Codeblock code={codeWalletContextProviderSetup} language={languageJSX}></Codeblock>
            <p>
              For reference, you can check out the full script <a href="https://github.com/QuezarHQ/solana-wallet-adapter-101/blob/main/src/components/WalletContextProvider.tsx" className="underline">here</a>.
            </p>
            <br />
            <p>
              Now that our component is ready, we wrap it around the root element of our application (full example <a href="https://github.com/QuezarHQ/solana-wallet-adapter-101/blob/main/src/app/layout.tsx" className="underline">here</a>)
            </p>
            <Codeblock code={codeWalletContextProviderConfiguration} language={languageJSX}></Codeblock>
            <p>
              Great! We're all set to move to the final step.
            </p>
          </li>
          <br /><hr /><br />
          <li>
            <h3 className="text-primary text-lg font-bold m-2">
              Step 3: Include Wallet Buttons
            </h3>
            <br />
            <p>
              Now comes the fun part! It's time to include the wallet buttons in your dApp. You can easily do this by importing the buttons in your component.
            </p>
            <Codeblock code={codeImportButtons} language={languageJSX}></Codeblock>
            <p>
              Then add the following code wherever you want the wallet buttons to appear:
            </p>
            <Codeblock code={codeIncludeButtons} language={languageJSX}></Codeblock>
            <p>
              While building a dapp, you would choose only one button from any of these four. Each button works differently, and you would want to pick the one that suits your need the most. Check out the <a href="/try" className="underline">demo page</a> to see them in action!
            </p>
            <br />
            <p>
              Similarly, you can include these buttons from other UI kits also. Check out <a href="https://github.com/QuezarHQ/solana-wallet-adapter-101/blob/main/src/app/try/page.tsx" className="underline">this</a> script for example code.
            </p>
          </li>
          <br /><hr /><br />
          <li>
            <h3 className="text-primary text-lg font-bold m-2">
              Bonus step: Add a button for signing transactions
            </h3>
            <br />
            <p>Now that we have our wallet all set, we'll setup our app for signing transactions with one more simple step.</p>
            <br />
            <p>Add {" "}
              <a href="https://github.com/QuezarHQ/solana-wallet-adapter-101/blob/main/src/components/SignTransaction.tsx" className="underline">
                this
              </a> 
              {" "} component in your app. And then import it where you'd like to add a button for signing transactions.</p>
            <br />
            <p>
              Under the hood, this component uses the <code className="font-bold">signTransaction</code> functionality which comes buit-in with the solana wallet adapter's <code className="font-bold">useWallet()</code> method. This method can similarly also be used to {" "}
              <a href="https://github.com/QuezarHQ/solana-wallet-adapter-101/blob/main/src/components/SignMessage.tsx" className="underline">
                sign messages
              </a>
              {" "} or {" "}
              <a href="https://github.com/QuezarHQ/solana-wallet-adapter-101/blob/main/src/components/SignIn.tsx" className="underline">
                sign in
              </a>
              .
            </p>
            <br />
            <p>
              Check out the <a href="/try" className="underline">demo page</a> to try all these functionalities!
            </p>
            <br />
            <p>
              For more details, take a look at the OG <a href="https://github.com/solana-labs/wallet-adapter" className="underline">solana wallet adapter</a> repo. It contains everything from the list of available packages to sample scripts. 
            </p>
            <br />
            <p>
              Also, if you are working with non-react applications and want to integrate the adapter using vanilla JS, this <a href="https://github.com/ronanyeah/solana-connect" className="underline">repo</a> might be a useful example. 
            </p>
          </li>
        </ul>
        <br /><hr /><br />
        <p>
          That's it! With these three simple steps, you've successfully integrated the Solana Wallet Adapter into your dApp. Your users can now connect their favorite wallets with ease. Happy coding! 😎🚀
        </p>
      </div>
      <br />
    </div>
  );
};

export default How;
