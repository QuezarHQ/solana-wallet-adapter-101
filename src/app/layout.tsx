import './globals.css'
import type { Metadata } from 'next'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WalletContextProvider from '@/components/WalletContextProvider';

export const metadata: Metadata = {
  title: 'Solana Wallet Adapter 101',
  description: 'A simple guide for integrating solana wallet adapter.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="forest">
      <body>
          <Header></Header>
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
          <Footer></Footer>
      </body>
    </html>
  )
}
