import type { NextPage } from "next";
import Head from "next/head";

import { APP } from "@/constants";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{APP.NAME}</title>
        <meta name="description" content={APP.DESCRIPTION} />
      </Head>

      <main>시작</main>
    </div>
  );
};

export default Home;
