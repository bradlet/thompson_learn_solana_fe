import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as web3 from '@solana/web3.js'
import { useState } from 'react';
import { GlobalContext } from '../context';

function App({ Component, pageProps }: AppProps) {
  const [network, setNetwork] = useState<web3.Cluster | undefined>("devnet");
  const [account, setAccount] = useState<web3.Keypair | null>(null);

  return(
    <GlobalContext.Provider value={{ network, setNetwork, account, setAccount }} >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default App
