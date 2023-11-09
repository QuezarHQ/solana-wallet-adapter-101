"use client";

import React from "react";
import { useState } from "react";

import * as reactWallet from '@solana/wallet-adapter-react-ui'
// import * as muiWallet from '@solana/wallet-adapter-material-ui'
// import * as antWallet from '@solana/wallet-adapter-ant-design'

import { SignTransaction } from "@/components/SignTransaction";
import { SignMessage } from "@/components/SignMessage";
import { SignIn } from "@/components/SignIn";

const Try = () => {

  const [reactToggle, setReactToggle] = useState(true);
  function toggleReact() {
    setReactToggle(!reactToggle);
  }

  const [muiToggle, setMuiToggle] = useState(true);
  function toggleMui() {
    setMuiToggle(!muiToggle);
  }

  const [antToggle, setAntToggle] = useState(true);
  function toggleAnt() {
    setAntToggle(!antToggle);
  }

  const [connectToggle, setConnectToggle] = useState(true);
  function toggleConnect() {
    setConnectToggle(!connectToggle);
  }

  const [disconnectToggle, setDisconnectToggle] = useState(true);
  function toggleDisconnect() {
    setDisconnectToggle(!disconnectToggle);
  }

  const [dialogToggle, setDialogToggle] = useState(true);
  function toggleDialog() {
    setDialogToggle(!dialogToggle);
  }

  const [multiToggle, setMultiToggle] = useState(true);
  function toggleMulti() {
    setMultiToggle(!multiToggle);
  }

  const [signInToggle, setSignInToggle] = useState(true);
  function toggleSignIn() {
    setSignInToggle(!signInToggle);
  }

  const [signMessageToggle, setSignMessageToggle] = useState(true);
  function toggleSignMessage() {
    setSignMessageToggle(!signMessageToggle);
  }

  const [signTransactionToggle, setSignTransactionToggle] = useState(true);
  function toggleSignTransaction() {
    setSignTransactionToggle(!signTransactionToggle);
  }



  return (
    <div className="border flex flex-row justify-around p-10">
      <div className="w-1/4">
        <div className="border border-gray-300 m-5 p-2 h-screen overflow-scroll">
          <div className="p-2">
            <p className="font-bold">Select UI Kits:</p>
            <ul className="p-2">
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleReact} /> {" React"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleMui} /> {" Material UI"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleAnt} /> {" Ant Design"}
                </label>
              </li>
            </ul>
          </div>
          <hr />
          <br />
          <div className="p-2">
            <p className="font-bold">Select Functionalities:</p>
            <ul className="p-2">
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleConnect} /> {" Connect Wallet Button"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleDisconnect} /> {" Disconnect Wallet Button"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleDialog} /> {" Dialog/Modal Button"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleMulti} /> {" Multi Wallet Button"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleSignTransaction} /> {" Sign Transaction Button"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleSignMessage} /> {" Sign Message Button"}
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" onChange={toggleSignIn} /> {" Sign In Button"}
                </label>
              </li>
            </ul>
          </div>
          <hr />
          <br />
        </div>
      </div>
      <div className="w-3/4">
        <div className="flex flex-row h-screen bg-gray-300 m-5">
          <div className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
              {connectToggle && <div className='flex flex-col h-1/4 items-end justify-center'>
                <p>Connect Wallet button</p>
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/4 items-end justify-center'>
                <p>Disconnect Wallet button</p>
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/4 items-end justify-center'>
                <p>Dialog/Modal button</p>
              </div>}
              {multiToggle && <div className='flex flex-col h-1/4 items-end justify-center'>
                <p>Multi button</p>
              </div>}
            </div>
            <div className="h-2/5 justify-around">
              {signTransactionToggle && <div className='flex flex-col h-1/3 items-end justify-center'>
                <p>Sign Transaction</p>
              </div>}
              {signMessageToggle && <div className='flex flex-col h-1/3 items-end justify-center'>
                <p>Sign Message</p>
              </div>}
              {signInToggle && <div className='flex flex-col h-1/3 items-end justify-center'>
                <p>Sign In</p>
              </div>}
            </div>
          </div>
          {reactToggle && <div id="react-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
              {connectToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <reactWallet.WalletConnectButton></reactWallet.WalletConnectButton>
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <reactWallet.WalletDisconnectButton></reactWallet.WalletDisconnectButton>
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <reactWallet.WalletModalButton></reactWallet.WalletModalButton>
              </div>}
              {multiToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <reactWallet.WalletMultiButton></reactWallet.WalletMultiButton>
              </div>}
            </div>
            <div className="h-2/5 justify-around">
              {signTransactionToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignTransaction></SignTransaction>
              </div>}
              {signMessageToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignMessage></SignMessage>
              </div>}
              {signInToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignIn></SignIn>
              </div>}
            </div>
          </div>}
          {/* {muiToggle && <div id="mui-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
              {connectToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletConnectButton></muiWallet.WalletConnectButton>
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletDisconnectButton></muiWallet.WalletDisconnectButton>
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletDialogButton></muiWallet.WalletDialogButton>
              </div>}
              {multiToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <muiWallet.WalletMultiButton></muiWallet.WalletMultiButton>
              </div>}
            </div>
            <div className="h-2/5 justify-around">
              {signTransactionToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignTransaction></SignTransaction>
              </div>}
              {signMessageToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignMessage></SignMessage>
              </div>}
              {signInToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignIn></SignIn>
              </div>}
            </div>
          </div>} */}
          {/* {antToggle && <div id="ant-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-3/5 justify-around">
              {connectToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletConnectButton></antWallet.WalletConnectButton>
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletDisconnectButton></antWallet.WalletDisconnectButton>
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletModalButton></antWallet.WalletModalButton>
              </div>}
              {multiToggle && <div className='flex flex-col h-1/4 items-center justify-center'>
                <antWallet.WalletMultiButton></antWallet.WalletMultiButton>
              </div>}
            </div>
            <div className="h-2/5 justify-around">
              {signTransactionToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignTransaction></SignTransaction>
              </div>}
              {signMessageToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignMessage></SignMessage>
              </div>}
              {signInToggle && <div className='flex flex-col h-1/3 items-center justify-center'>
                <SignIn></SignIn>
              </div>}
            </div>
          </div>} */}
        </div>
      </div>
    </div>
  )
}

export default Try