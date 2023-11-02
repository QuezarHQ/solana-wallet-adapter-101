"use client";

import React from 'react'
import * as reactWallet from '@solana/wallet-adapter-react-ui'
import { SignTransaction } from './SignTransaction';
import { SignMessage } from './SignMessage';
import { SignIn } from './SignIn';

const ReactWalletButton = () => {
  return (
    <div>
        
        <br />
        <span>Connect button: </span>
        <reactWallet.WalletConnectButton></reactWallet.WalletConnectButton>
        <br />

        <br />
        <span>Disconnect Button: </span>
        <reactWallet.WalletDisconnectButton></reactWallet.WalletDisconnectButton>
        <br />

        <br />
        <span>Modal button: </span>
        <reactWallet.WalletModalButton></reactWallet.WalletModalButton>
        <br />

        <br />
        <span>Multi button: </span> 
        <reactWallet.WalletMultiButton></reactWallet.WalletMultiButton>
        <br />

        <br />
        <span>Sign Transaction: </span> 
          <SignTransaction></SignTransaction>
        <br />

        <br />
        <span>Sign Message: </span> 
          <SignMessage></SignMessage>
        <br />

        <br />
        <span>Sign In: </span> 
          <SignIn></SignIn>
        <br />
        
    </div>
    
  )
}

export default ReactWalletButton