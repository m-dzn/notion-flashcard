import type { NextPage } from "next";

import { FlashcardPageTemplate, Flashcard, Seo } from "@/components";
import { NOTION } from "@/constants";
import { getCardList } from "@/lib/notion";

interface Props {
  cardList: any[];
}

const cardProperties = {
  title: "이름",
  header: ["Eng"],
  body: ["그룹", "분류", "중요도", "학습 상태", "학습일", "질문"],
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

export async function getStaticProps() {
  const { cardList } = await getCardList(NOTION.DATABASE_ID);
  return {
    props: {
      cardList,
    },
  };
}
