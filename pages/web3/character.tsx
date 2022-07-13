import { NextPage } from "next";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import { TEST_STATS } from "../../helpers/fixtures";
// import * as solanaW3 from '@solana/web3.js';
// console.log(solanaW3);

export async function getServerSideProps(context: any) {
    return {
        props: { 
            data: TEST_STATS
        }
    }
}

const Character: NextPage = ({data}: any) => {
  return (
    <div>
      <TopBar pageTitle="Character sheet" />
      <main>
          Name: {data.currentName} <br/>
          level: {data.level}
          <div>
            <p>Here is bob: {JSON.stringify(TEST_STATS)}</p>
          </div>
      </main>
      <Link href="/">
        <a>Return to home page</a>
      </Link>
    </div>
  );
};


export default Character;
