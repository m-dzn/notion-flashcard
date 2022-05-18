import type { NextPage } from "next";
import Head from "next/head";

import { APP } from "@/constants";
import { Flashcard } from "@/components";
import { getFlashcards } from "@/lib/notion";

interface Props {
  results: [any];
}

const Home: NextPage<Props> = ({ results }: Props) => {
  return (
    <div>
      <Head>
        <title>{APP.NAME}</title>
        <meta name="description" content={APP.DESCRIPTION} />
      </Head>

      <main>
        {results.map((result) => (
          <Flashcard key={result.id} notionPage={result} />
        ))}
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { results } = await getFlashcards();
  return {
    props: {
      results,
    },
  };
}
