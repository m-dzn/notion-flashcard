import type { NextPage } from "next";
import axios from "axios";

import {
  FlashcardPageTemplate,
  Flashcard,
  Seo,
  FilterMenu,
} from "@/components";
import { NOTION, URL } from "@/constants";
import { getToday, useCardList } from "@/lib";
import { getCardListDBSchema, getRetrievePropValues } from "@/lib/notion";

const cardProperties = {
  title: "이름",
  header: ["Eng"],
  body: ["그룹", "분류", "중요도", "학습 상태", "학습일", "빈출", "질문"],
};

const defaultFilter = {
  학습일: {
    date: {
      before: getToday(),
    },
  },
};

interface Props {
  categoryFilterButtons: any;
  importanceFilterButtons: any;
}

const Home: NextPage<Props> = ({
  categoryFilterButtons,
  importanceFilterButtons,
}: Props) => {
  const { cardList, refetchCardList } = useCardList({ defaultFilter });

  const onClick = async (cardId: string) => {
    if (confirm("충분히 학습하셨나요?")) {
      await axios.patch(`${URL.API.CARD.COMPLETE}/${cardId}`, {
        propName: "학습일",
      });

      refetchCardList();
    }
  };

  return (
    <FlashcardPageTemplate
      header={[
        <FilterMenu
          key="분류-filter-menu"
          title="분류"
          filterMenu={categoryFilterButtons}
          getFilter={(value) => ({
            property: "분류",
            multi_select: {
              contains: value,
            },
          })}
        />,
        <FilterMenu
          key="중요도-filter-menu"
          title="중요도"
          filterMenu={importanceFilterButtons}
          getFilter={(value) => ({
            property: "중요도",
            select: {
              equals: value,
            },
          })}
        />,
      ]}
    >
      <Seo />
      {cardList.map((card) => (
        <Flashcard
          key={card.id}
          card={card}
          properties={cardProperties}
          onClickComplete={onClick}
        />
      ))}
    </FlashcardPageTemplate>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const dbSchema = await getCardListDBSchema(NOTION.DATABASE_ID);

  return {
    props: {
      categoryFilterButtons: getRetrievePropValues(dbSchema, {
        propName: "분류",
        propType: "multi_select",
      }),
      importanceFilterButtons: getRetrievePropValues(dbSchema, {
        propName: "중요도",
        propType: "select",
      }),
    },
  };
};
