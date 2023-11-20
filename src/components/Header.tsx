import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar bg-neutral p-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl">
          <Link href="/">Solana Wallet Adapter 101</Link>
        </a>
      </div>
      <div className="flex-none font-extrabold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/what">What is it?</Link>
          </li>
          <li>
            <Link href="/how">How to use it?</Link>
          </li>
          <li>
            <Link href="/try">Try it out!</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header