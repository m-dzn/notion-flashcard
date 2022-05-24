import { atom, selector } from "recoil";
import produce from "immer";

import { FilterSelector, FilterState } from "@/lib";

export const filterState = atom<FilterState>({
  key: "filterState",
  default: undefined,
});

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const filter = get(filterState);
    if (!filter) return null;

    return Object.entries(filter).reduce<FilterSelector>(
      (acc, [key, value]) => {
        acc.and.push({ property: key, ...value });
        return acc;
      },
      { and: [] }
    );
  },
  set: ({ set }, newValue: any) => {
    if ("property" in newValue) {
      const { property, ...rest } = newValue;

      set(filterState, (prev) =>
        produce(prev, (draft) => {
          draft[property] = rest;
        })
      );
    }
  },
});
