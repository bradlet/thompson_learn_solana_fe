import React, { createContext, useContext } from "react";
import { Cluster, Keypair } from "@solana/web3.js";

// Pulled from this example: https://github.com/ianbrdeguzman/solana-wallet-dapp/blob/main/context/index.ts

export type GlobalContextType = {
    network: Cluster | undefined;
    setNetwork: React.Dispatch<React.SetStateAction<Cluster | undefined>>;
    account: Keypair | null;
    setAccount: React.Dispatch<React.SetStateAction<Keypair | null>>;
}

export const GlobalContext = createContext<GlobalContextType>({
    network: "devnet",
    setNetwork: () => null,
    account: null,
    setAccount: () => null,
})

export const useGlobalState = () => useContext(GlobalContext);