"use client";

import React from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

import { SignTransaction } from "@/components/SignTransaction";
import { SignMessage } from "@/components/SignMessage";
import { SignIn } from "@/components/SignIn";

const ReactConnectButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletConnectButton,
  { ssr: false }
);
const ReactDisconnectButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletDisconnectButton,
  { ssr: false }
);
const ReactDialogButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletModalButton,
  { ssr: false }
);
const ReactMultiButton = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const MaterialConnectButton = dynamic(
  async () => (await import("@solana/wallet-adapter-material-ui")).WalletConnectButton,
  { ssr: false }
);
const MaterialDisconnectButton = dynamic(
  async () => (await import("@solana/wallet-adapter-material-ui")).WalletDisconnectButton,
  { ssr: false }
);
const MaterialDialogButton = dynamic(
  async () => (await import("@solana/wallet-adapter-material-ui")).WalletDialogButton,
  { ssr: false }
);
const MaterialMultiButton = dynamic(
  async () => (await import("@solana/wallet-adapter-material-ui")).WalletMultiButton,
  { ssr: false }
);

const AntConnectButton = dynamic(
  async () => (await import("@solana/wallet-adapter-ant-design")).WalletConnectButton,
  { ssr: false }
);
const AntDisconnectButton = dynamic(
  async () => (await import("@solana/wallet-adapter-ant-design")).WalletDisconnectButton,
  { ssr: false }
);
const AntDialogButton = dynamic(
  async () => (await import("@solana/wallet-adapter-ant-design")).WalletModalButton,
  { ssr: false }
);
const AntMultiButton = dynamic(
  async () => (await import("@solana/wallet-adapter-ant-design")).WalletMultiButton,
  { ssr: false }
);





const Try = () => {

  const [reactToggle, setReactToggle] = useState(true);
  function toggleReact() {
    setReactToggle(!reactToggle);
  }

  const [muiToggle, setMuiToggle] = useState(false);
  function toggleMui() {
    setMuiToggle(!muiToggle);
  }

  const [antToggle, setAntToggle] = useState(false);
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
    <div className="flex flex-row justify-around p-10">
      <div className="w-1/4">
        <div className="border border-white rounded-lg m-5 p-2 overflow-scroll">
          <div className="p-2">
            <p className="font-bold text-primary">Select UI Kits:</p>
            <ul className="p-2">
              <li>
                <label className="label cursor-pointer">
                  <span className="label-text">React</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={reactToggle} onChange={toggleReact} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Material UI</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={muiToggle} onChange={toggleMui} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Ant Design</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={antToggle} onChange={toggleAnt} />
                </label>
              </li>
            </ul>
          </div>
          <hr />
          <br />
          <div className="p-2">
            <p className="font-bold text-primary">Select Functionalities:</p>
            <ul className="p-2">
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Connect Wallet button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={connectToggle} onChange={toggleConnect} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Disconnect Wallet button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={disconnectToggle} onChange={toggleDisconnect} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Dialog/Modal button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={dialogToggle} onChange={toggleDialog} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Multi button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={multiToggle} onChange={toggleMulti} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Sign Transaction button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={signTransactionToggle} onChange={toggleSignTransaction} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Sign Message button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={signMessageToggle} onChange={toggleSignMessage} />
                </label>
              </li>
              <li>
                <label className="label cursor-pointer">
                <span className="label-text">Sign In button</span>
                  <input className="checkbox checkbox-primary" type="checkbox" name="" defaultChecked={signInToggle} onChange={toggleSignIn} />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="flex flex-row h-screen bg-base-100 m-5 font-bold">
          <div className="flex flex-col w-1/4 h-screen">
            <div className="h-2/3 justify-around">
              <div className='flex flex-col h-1/5 items-center justify-center'>
                <p>{" "}</p>
              </div>
              {connectToggle && <div className='flex flex-col h-1/5 items-end justify-center'>
                <p>Connect Wallet button</p>
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/5 items-end justify-center'>
                <p>Disconnect Wallet button</p>
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/5 items-end justify-center'>
                <p>Dialog/Modal button</p>
              </div>}
              {multiToggle && <div className='flex flex-col h-1/5 items-end justify-center'>
                <p>Multi button</p>
              </div>}
            </div>
            <div className="h-1/3 justify-around">
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
            <div className="h-2/3 justify-around">
              <div className='flex flex-col h-1/5 items-center justify-center'>
                <p>React UI</p>
              </div>
              {connectToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <ReactConnectButton />
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <ReactDisconnectButton />
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <ReactDialogButton />
              </div>}
              {multiToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <ReactMultiButton />
              </div>}
            </div>
            <div className="h-1/3 justify-around">
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
          {muiToggle && <div id="mui-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-2/3 justify-around">
              <div className='flex flex-col h-1/5 items-center justify-center'>
                <p>Material UI</p>
              </div>
              {connectToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <MaterialConnectButton />
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <MaterialDisconnectButton />
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <MaterialDialogButton />
              </div>}
              {multiToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <MaterialMultiButton />
              </div>}
            </div>
            <div className="h-1/3 justify-around">
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
          {antToggle && <div id="ant-box" className="flex flex-col w-1/4 h-screen">
            <div className="h-2/3 justify-around">
              <div className='flex flex-col h-1/5 items-center justify-center'>
                <p>Ant Design</p>
              </div>
              {connectToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <AntConnectButton />
              </div>}
              {disconnectToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <AntDisconnectButton />
              </div>}
              {dialogToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <AntDialogButton />
              </div>}
              {multiToggle && <div className='flex flex-col h-1/5 items-center justify-center'>
                <AntMultiButton />
              </div>}
            </div>
            <div className="h-1/3 justify-around">
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
        </div>
      </div>
    </div>
  )
}

export default Try