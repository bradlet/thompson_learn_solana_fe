import { NextPage } from "next";
import Link from "next/link";
import TopBar from "../../components/TopBar";
// import * as solanaW3 from '@solana/web3.js';
// console.log(solanaW3);

export async function getServerSideProps(context: any) {
    const test = {
        color: "blue"
    }

    return {
        props: {
            data: test
        }
    }
}

const Character: NextPage = ({ data }: any) => {
  return (
    <div>
      <TopBar pageTitle="Character sheet" />
      <main>
          {data.color}
      </main>
      <Link href="/">
        <a>Return to home page</a>
      </Link>
    </div>
  );
};


export default Character;
