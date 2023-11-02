import React from 'react'

const Sidebar = () => {
  return (
    <div className="border border-gray-300 m-5 p-2 h-screen overflow-scroll">
        <div className="p-2">
            <p className="font-bold">Select Wallets:</p>
            <ul className="p-2">
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Alpha Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Avana Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Bitkeep Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Bitpie Wallet
                    </label>
                </li><li>
                    <label>
                        <input type="checkbox" name="" id="" /> Censo Wallet
                    </label>
                </li><li>
                    <label>
                        <input type="checkbox" name="" id="" /> Clover Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Coin98 Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Coinbase Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Coinhub Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Backpack Wallet
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Phantom Wallet
                    </label>
                </li>
            </ul>
        </div>
        <hr />
        <br />
        <div className="p-2">
            <p className="font-bold">Select UI Kits:</p>
            <ul className="p-2">
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> React
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Material UI
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Ant Design
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
                        <input type="checkbox" name="" id="" /> Connect Wallet Button
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Disconnect Wallet Button
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Dialog/Modal Button
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Multi Button
                    </label>
                </li><li>
                    <label>
                        <input type="checkbox" name="" id="" /> Sign Transaction
                    </label>
                </li><li>
                    <label>
                        <input type="checkbox" name="" id="" /> Sign Message
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="" id="" /> Sign Up
                    </label>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar