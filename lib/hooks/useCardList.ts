import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";

import { URL } from "@/constants";
import { FilterState } from "@/lib";
import { CardListQueryResult } from "@/lib/notion";
import { cardListState, filterSelector, filterState } from "@/lib/recoil";

interface Props {
  defaultFilter: FilterState;
}

export const useCardList = ({ defaultFilter }: Props) => {
  const [cardList, setCardList] = useRecoilState(cardListState);

  const setDefaultFilter = useSetRecoilState(filterState);
  const filter = useRecoilValue(filterSelector);

  useEffect(() => {
    if (!filter) {
      setDefaultFilter(defaultFilter);
    } else {
      axios
        .post<CardListQueryResult>(URL.API.CARD_LIST, { filter })
        .then(({ data }) => data.cardList)
        .then(setCardList);
    }
  }, [filter]);

  return { cardList };
};
