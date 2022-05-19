import {
  notionSelectColors,
  notionTextColors,
  notionProperties,
  notionRollupFunctions,
} from "@/lib/notion/constants";

export type PropertyType = keyof typeof notionProperties;

export type NotionSelectColors = keyof typeof notionSelectColors;
export type NotionTextColors = keyof typeof notionTextColors;

export type RollupFunction = keyof typeof notionRollupFunctions;
