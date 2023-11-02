"use client";

import React from 'react'
import ReactWalletButton from './ReactWalletButton'

import * as reactWallet from '@solana/wallet-adapter-react-ui'

import { SignTransaction } from './SignTransaction';
import { SignMessage } from './SignMessage';
import { SignIn } from './SignIn';

const ButtonGallery = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-300 m-5">
        <div className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
                <div className='flex flex-col h-1/4 items-end justify-center'>
                    <p>Connect Wallet button</p>
                </div>
                <div className='flex flex-col h-1/4 items-end justify-center'>
                    <p>Disconnect Wallet button</p>
                </div>
                <div className='flex flex-col h-1/4 items-end justify-center'>
                    <p>Dialog/Modal button</p>
                </div>
                <div className='flex flex-col h-1/4 items-end justify-center'>
                    <p>Multi button</p>
                </div>
            </div>
            <div className="h-2/5 justify-around">
                <div className='flex flex-col h-1/3 items-end justify-center'>
                    <p>Sign Transaction</p>
                </div>
                <div className='flex flex-col h-1/3 items-end justify-center'>
                    <p>Sign Message</p>
                </div>
                <div className='flex flex-col h-1/3 items-end justify-center'>
                    <p>Sign In</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
                <div className='flex flex-col h-1/4 items-center justify-center'>
                    <reactWallet.WalletConnectButton></reactWallet.WalletConnectButton>
                </div>
                <div className='flex flex-col h-1/4 items-center justify-center'>
                    <reactWallet.WalletDisconnectButton></reactWallet.WalletDisconnectButton>
                </div>
                <div className='flex flex-col h-1/4 items-center justify-center'>
                    <reactWallet.WalletModalButton></reactWallet.WalletModalButton>
                </div>
                <div className='flex flex-col h-1/4 items-center justify-center'>
                    <reactWallet.WalletMultiButton></reactWallet.WalletMultiButton>
                </div>
            </div>
            <div className="h-2/5 justify-around">
                <div className='flex flex-col h-1/3 items-center justify-center'>
                    <SignTransaction></SignTransaction>
                </div>
                <div className='flex flex-col h-1/3 items-center justify-center'>
                    <SignMessage></SignMessage>
                </div>
                <div className='flex flex-col h-1/3 items-center justify-center'>
                    <SignIn></SignIn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ButtonGallery