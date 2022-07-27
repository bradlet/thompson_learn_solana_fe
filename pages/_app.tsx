import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as web3 from '@solana/web3.js'
import { useState } from 'react';
import { GlobalContext } from '../context';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

function App({ Component, pageProps }: AppProps) {
  const [network, setNetwork] = useState<web3.Cluster | undefined>("devnet")
  const [account, setAccount] = useState<web3.Keypair | null>(null)
  const wallet = new PhantomWalletAdapter()

  return(
    <GlobalContext.Provider value={{ network, setNetwork, account, setAccount }} >
      <ConnectionProvider endpoint={web3.clusterApiUrl(network)}>
        <WalletProvider wallets={[wallet]}>
          <Component {...pageProps} />
        </WalletProvider>
      </ConnectionProvider>
    </GlobalContext.Provider>
  )
}

export default App
