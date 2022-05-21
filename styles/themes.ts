import { TEXT_COLOR } from "@/lib/notion";

import { hexToRGB } from "@/styles/mixins";

const color = {
  white: "#FFF",
} as const;

export const defaultTheme = {
  background: color.white,
  font: TEXT_COLOR.default,
  scrollbar: hexToRGB(TEXT_COLOR.default, 0.45),
} as const;

export type Theme = typeof defaultTheme;
