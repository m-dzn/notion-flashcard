import type { NextPage } from "next";

import { Seo } from "@/components";
import { getCardList } from "@/lib/notion";

interface Props {
  cardList: any[];
}

const Home: NextPage<Props> = ({ cardList }: Props) => {
  return (
    <div>
      <Seo />
      {cardList.map((card) => (
        <div key={card.id}>{card.properties.이름.title[0].plain_text}</div>
      ))}
    </div>
  );
};

export default Home;

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export async function getStaticProps() {
  const { cardList } = await getCardList(NOTION_DATABASE_ID);
  return {
    props: {
      cardList,
    },
  };
}
