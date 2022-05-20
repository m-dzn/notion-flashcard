import type { NextPage } from "next";
import Head from "next/head";

import { APP } from "@/constants";

interface Props {
  results: any[];
}

const Home: NextPage<Props> = ({ results }: Props) => {
  return (
    <div>
      <Head>
        <title>{APP.NAME}</title>
        <meta name="description" content={APP.DESCRIPTION} />
      </Head>

      <main></main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      results: [],
    },
  };
}
