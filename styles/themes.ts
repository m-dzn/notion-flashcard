import { TEXT_COLOR } from "@/lib/notion";

const color = {
  white: "#FFF",
};

export const defaultTheme = {
  background: color.white,
  font: TEXT_COLOR.default,
};

export type Theme = typeof defaultTheme;
