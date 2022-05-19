import {
  notionSelectColors,
  notionTextColors,
  notionProperties,
  notionRollupFunctions,
  notionFormulaTypes,
} from "../constants";

export type PropertyType = keyof typeof notionProperties;

export type NotionSelectColors = keyof typeof notionSelectColors;
export type NotionTextColors = keyof typeof notionTextColors;

export type RollupFunction = keyof typeof notionRollupFunctions;

export type NotionFormulaTypes = keyof typeof notionFormulaTypes;
