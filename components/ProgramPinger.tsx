import { ReactElement, useState } from "react";
import { useGlobalState } from "../context";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";

const PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PROGRAM_DATA_ADDRESS = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

const ProgramPinger = (): ReactElement => {
    const [txnSig, setTxnSig] = useState<string>("");
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const ping = async () => {
        if (!connection || !publicKey) {
            console.log("Can't ping without an active connnection.");
            return;
        }

        try {
            setTxnSig("");
            const programId = new web3.PublicKey(PROGRAM_ADDRESS);
            const programDataPubkey = new web3.PublicKey(PROGRAM_DATA_ADDRESS);

            const instruction = new web3.TransactionInstruction({
                keys: [
                    {
                        pubkey: programDataPubkey,
                        isSigner: false,
                        isWritable: true,
                    },
                ],
                programId,
            });

            const txn = new web3.Transaction();
            txn.add(instruction);

            sendTransaction(txn, connection).then((sig) => {
                setTxnSig(sig);
                console.log(
                    `You can view your transaction on the Solana Explorer at:\nhttps://explorer.solana.com/tx/${sig}?cluster=devnet`
                );
            });
        } catch (e: any) {
            console.log(`Failed to confirm transaction: ${e.message}`);
        }
    };

    return (
        <>
            <h1>Ping the program!</h1>
            <p>Signature: {txnSig}</p>
            <button onClick={ping}>Ping it!</button>
        </>
    );
};

export default ProgramPinger;
