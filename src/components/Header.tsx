import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-screen flex flex-row justify-between p-10">
        <div className="w-1/3 text-3xl font-extrabold ">
          <Link href="/">Solana Wallet Adapter 101</Link>
        </div>
        <div className="w-1/2 flex flex-row justify-around text-xl font-medium">
            <span className="hover:underline">
              <Link href="/what">What is it?</Link>
            </span>
            <span className="hover:underline">
              <Link href="/how">How to use it?</Link>
            </span>
            <span className="hover:underline">
              <Link href="/try">Try it out!</Link>
            </span>
        </div>
    </div>
  )
}

export default Header