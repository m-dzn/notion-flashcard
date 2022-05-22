import type { NextPage } from "next";

import { FlashcardPageTemplate, Flashcard, Seo } from "@/components";
import { getCardList } from "@/lib/notion";

interface Props {
  cardList: any[];
}

const cardProperties = {
  title: "이름",
  header: ["Eng"],
  body: ["분류", "중요도", "학습 상태", "빈출", "학습일"],
};

const Home: NextPage<Props> = ({ cardList }: Props) => {
  return (
    <FlashcardPageTemplate>
      <Seo />
      {cardList.map((card) => (
        <Flashcard key={card.id} card={card} properties={cardProperties} />
      ))}
    </FlashcardPageTemplate>
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
