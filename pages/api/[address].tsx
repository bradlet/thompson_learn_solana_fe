import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    address: string,
    balance: number
}
type InvalidAddressError = {
    error: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | InvalidAddressError>
) {
    const connection = new Connection(clusterApiUrl('devnet'))
    const { address } = req.query

    try {
        const pubKey = new PublicKey(address)
        await connection
            .getBalance(pubKey)
            .then(balanceAmount => 
                res.status(200).json({
                    address: `${address}`,
                    balance: balanceAmount
                })
            )
    } catch (error) {
        res.status(404).json({
            error: `Could not get balance for account ${address}`
        })
    }
}