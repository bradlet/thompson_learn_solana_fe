// Entrypoint for the pieces of this website that I'll be trying web3 integrations on.
import Link from 'next/link';
import { useState } from 'react';

export default function Solana() {
    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState(0)

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        let addr = event.currentTarget.elements.inputAddress.value
        fetch(`/api/${addr}`)
            .then((res: Response) =>{
                if (res.status == 200) {
                    return res.json()
                } else { return { balance: 0 }}
            })
            .then((data: any) => {setBalance(data.balance)})
    }

    return (
        <div>
            <h1>Web3 - Learn Solana</h1>
            <p>Retreiving balance for: {address}</p>
            <p>Current Balance: {balance}</p>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" id="inputAddress" />
                <input type="submit" />
            </form>
            <Link href="/"><a>Return to home page</a></Link>
        </div>
    );
}