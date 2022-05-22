import { TEXT_COLOR } from "@/lib/notion";

import { hexToRGB } from "@/styles/mixins";

const color = {
  white: "#FFF",
  lightGray: "#E6E7EA",
} as const;

export const defaultTheme = {
  background: color.white,
  backgroundHover: color.lightGray,
  font: TEXT_COLOR.default,
  subFont: TEXT_COLOR.gray,
  scrollbar: hexToRGB(TEXT_COLOR.default, 0.45),
} as const;

export type Theme = typeof defaultTheme;
