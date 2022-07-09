// Entrypoint for the pieces of this website that I'll be trying web3 integrations on.
import { NextPage } from 'next';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { TEST_STATS } from '../../helpers/fixtures';
import styles from '../../styles/solana.module.css';

const Solana: NextPage = () => {
    const [address, setAddress] = useState('')
    const [balance, setBalance] = useState(0)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let props: any = event.currentTarget.elements // HtmlFormElement's type is messed up :shrug:
        let addr = props.inputAddress.value
        setAddress(addr) 
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
            <div>
                <p>Retreiving balance for: {address}</p>
                <p>Current Balance: {balance}</p>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" id="inputAddress" />
                    <input type="submit" />
                </form>
            </div>
            <div>
                <p>Here is bob: {JSON.stringify(TEST_STATS)}</p>
            </div>
            <Link href="/"><a>Return to home page</a></Link>
        </div>
    );
}

export default Solana;