import { useEffect, useState } from "react";
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
  const [nextCursor, setNextCursor] = useState<string | null>("");
  const [hasMore, setHasMore] = useState(false);

  const setDefaultFilter = useSetRecoilState(filterState);
  const filter = useRecoilValue(filterSelector);

  const fetch = async (cursor?: string | null) => {
    const { data } = await axios.post<CardListQueryResult>(URL.API.CARD_LIST, {
      startCursor: cursor,
      filter,
    });

    const { cardList, next_cursor, has_more } = data;
    setHasMore(has_more);
    setNextCursor(next_cursor);

    console.log("문제", cursor, next_cursor);

    return { cardList };
  };

  const refetchCardList = async () => {
    const { cardList } = await fetch();
    setCardList(cardList);
  };

  const getNextCardList = async () => {
    if (hasMore) {
      const { cardList } = await fetch(nextCursor);
      setCardList((prev) => [...prev, ...cardList]);
    }
  };

  useEffect(() => {
    if (!filter) {
      setDefaultFilter(defaultFilter);
    } else {
      refetchCardList();
    }
  }, [filter]);

  return { cardList, hasMore, refetchCardList, getNextCardList };
};
