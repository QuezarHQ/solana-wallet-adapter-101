"use client";

import React from "react";
// import Sidebar from "@/components/Sidebar";
// import ButtonGallery from "@/components/ButtonGallery";
import { useState } from "react";

import * as reactWallet from '@solana/wallet-adapter-react-ui'
import * as muiWallet from '@solana/wallet-adapter-material-ui'
import * as antWallet from '@solana/wallet-adapter-ant-design'

import { SignTransaction } from "@/components/SignTransaction";
import { SignMessage } from "@/components/SignMessage";
import { SignIn } from "@/components/SignIn";

const Try = () => {

  const [reactVisbility, setReactVisibility] = useState(true)
  // const [muiVisibility, setMuiVisibility] = useState(false)
  // const [antVisibility, setAntVisibility] = useState(false)
  // const [filter, setFilter] = useState({
  //   wallet: {
  //     alpha: {
  //       status: false,
  //       label: "Alpha Wallet"
  //     },
  //     avana: {
  //       status: false,
  //       label: "Avana Wallet"
  //     },
  //     bitkeep: {
  //       status: false,
  //       label: "Bitkeep Wallet"
  //     },
  //     bitpie: {
  //       status: false,
  //       label: "Bitpie Wallet"
  //     },
  //     censo: {
  //       status: false,
  //       label: "Censo Wallet"
  //     },
  //     clover: {
  //       status: false,
  //       label: "Clover Wallet"
  //     },
  //     coin98: {
  //       status: false,
  //       label: "Coin98 Wallet"
  //     },
  //     coinbase: {
  //       status: false,
  //       label: "Coinbase Wallet"
  //     },
  //     coinhub: {
  //       status: false,
  //       label: "Coinhub Wallet"
  //     },
  //     fractal: {
  //       status: false,
  //       label: "Fractal Wallet"
  //     },
  //     huobi: {
  //       status: false,
  //       label: "Huobi Wallet"
  //     },
  //     hyperpay: {
  //       status: false,
  //       label: "Hyperpay Wallet"
  //     },
  //     keystone: {
  //       status: false,
  //       label: "Keystone Wallet"
  //     },
  //     krystal: {
  //       status: false,
  //       label: "Krystal Wallet"
  //     },
  //     ledger: {
  //       status: false,
  //       label: "Ledger Wallet"
  //     },
  //     math: {
  //       status: false,
  //       label: "Math Wallet"
  //     },
  //     neko: {
  //       status: false,
  //       label: "Neko Wallet"
  //     },
  //     nightly: {
  //       status: false,
  //       label: "Nightly Wallet"
  //     },
  //     nufi: {
  //       status: false,
  //       label: "Nufi Wallet"
  //     },
  //     onto: {
  //       status: false,
  //       label: "Nufi Wallet"
  //     },
  //     particle: {
  //       status: false,
  //       label: "Particle Wallet"
  //     },
  //     phantom: {
  //       status: false,
  //       label: "Phantom Wallet"
  //     },
  //     safepal: {
  //       status: false,
  //       label: "Safepal Wallet"
  //     },
  //     saifu: {
  //       status: false,
  //       label: "Saifu Wallet"
  //     },
  //     salmon: {
  //       status: false,
  //       label: "Salmon Wallet"
  //     },
  //     sky: {
  //       status: false,
  //       label: "Nufi Wallet"
  //     },
  //     solflare: false,
  //     solong: false,
  //     spot: false,
  //     tokenpocket: false,
  //     tokenary: false,
  //     torus: false,
  //     trust: false,
  //     unsafeburner: true,
  //     xdefi: false,
  //   },
  //   uikit: {
  //     react: {
  //       status: false,
  //       label: "React"
  //     },
  //     material: {
  //       status: false,
  //       label: "Material UI"
  //     },
  //     ant: {
  //       status: false,
  //       label: "Ant Design"
  //     },
  //   },
  //   functionality: {
  //     connect: false,
  //     disconnect: false,
  //     dialog: false,
  //     multi: false,
  //     signin: false,
  //     signmessage: false,
  //     signtransaction: false,
  //   } 
  // })

  return (
    <div className="border flex flex-row justify-around p-10">
      <div className="w-1/5">
        {/* <Sidebar filter={filter} setFilter={setFilter}></Sidebar> */}
        <div className="border border-gray-300 m-5 p-2 h-screen overflow-scroll">
          <div className="p-2">
            <p className="font-bold">Select Wallets:</p>
            <ul className="p-2">

            </ul>
          </div>
          <hr />
          <br />
          <div className="p-2">
            <p className="font-bold">Select UI Kits:</p>
            <ul className="p-2">
              <li>
                <label>
                  <input type="checkbox" name="" defaultChecked={reactVisbility} onChange={}/> {" React"}
                </label>
              </li>
              {/* <li>
                    <label>
                        <input type="checkbox" name="" defaultChecked={muiVisibility} onChange={setMuiVisibility(!muiVisibility)}/> {" Material UI"}
                    </label>
                  </li> */}
              {/* <li>
                    <label>
                        <input type="checkbox" name="" defaultChecked={antVisibility} onChange={setAntVisibility(!antVisibility)}/> {" Ant Design"}
                    </label>
                  </li> */}
            </ul>
          </div>
          <hr />
          <br />
          <div className="p-2">
            <p className="font-bold">Select Functionalities:</p>
            <ul className="p-2">

            </ul>
          </div>
          {/* <hr />
            <br />
            <div className="p-2">
                <button onClick={updateFilters}>Submit</button>
            </div> */}
        </div>
      </div>
      <div className="w-4/5">
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
          {<div id="react-box" className="flex flex-col w-1/4 h-screen">
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
          </div>}
          {<div id="mui-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletConnectButton></muiWallet.WalletConnectButton>
              </div>
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletDisconnectButton></muiWallet.WalletDisconnectButton>
              </div>
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletDialogButton></muiWallet.WalletDialogButton>
              </div>
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletMultiButton></muiWallet.WalletMultiButton>
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
          </div>}
          {<div id="ant-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletConnectButton></antWallet.WalletConnectButton>
              </div>
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletDisconnectButton></antWallet.WalletDisconnectButton>
              </div>
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletModalButton></antWallet.WalletModalButton>
              </div>
              <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletMultiButton></antWallet.WalletMultiButton>
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
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Try;
