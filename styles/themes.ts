import { notionTextColors } from "@/lib/notion";

const colors = {
  white: "#FFF",
};

export const defaultTheme = {
  colors: {
    background: colors.white,
    font: notionTextColors.default,
  },
};

export type Theme = typeof defaultTheme;
