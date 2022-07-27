import { NextPage } from "next";
import Link from "next/link";
import TopBar from "../../components/TopBar";
import { useGlobalState } from "../../context";
import { TEST_STATS } from "../../helpers/fixtures";
// import * as solanaW3 from '@solana/web3.js';
// console.log(solanaW3);

export async function getServerSideProps(context: any) {
  return {
    props: {
      data: TEST_STATS,
    },
  };
}

const Character: NextPage = ({ data }: any) => {
  const { network, account } = useGlobalState() // Keeping this just so I remember the syntax

  return (
    <div>
      <TopBar pageTitle="Character sheet" />
      <main>
        <div>
          Name: {data.currentName} <br />
          level: {data.level}
        </div>
      </main>
      <Link href="/">
        <a>Return to home page</a>
      </Link>
    </div>
  );
};

export default Character;
