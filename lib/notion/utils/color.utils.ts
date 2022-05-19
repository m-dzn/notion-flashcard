import { notionSelectColors, notionSelectTextColors } from "../constants";
import { NotionSelectColors } from "../types";

export const getNotionSelectColor = (color: NotionSelectColors) => {
  return {
    background: notionSelectColors[color],
    textColor: notionSelectTextColors[color],
  };
};
