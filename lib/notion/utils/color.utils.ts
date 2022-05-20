import { SELECT_COLOR } from "../constants";
import { SelectColor } from "../types";

export const getSelectColor = (color: SelectColor) => {
  return {
    background: SELECT_COLOR[color].background,
    textColor: SELECT_COLOR[color].text,
  };
};
