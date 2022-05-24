import { atom } from "recoil";

export const cardListState = atom<any[]>({
  key: "cardListState",
  default: [],
});
