import {
  SELECT_COLOR,
  TEXT_COLOR,
  PROPERTY_TYPE,
  FORMULA_TYPE,
  ROLLUP_FUNCTION,
  ROLLUP_TYPE,
} from "../constants";

export type PropertyType = keyof typeof PROPERTY_TYPE;
export type RollupFunction = keyof typeof ROLLUP_FUNCTION;
export type FormulaType = keyof typeof FORMULA_TYPE;
export type RollupType = keyof typeof ROLLUP_TYPE;

export type SelectColor = keyof typeof SELECT_COLOR;
export type TextColor = keyof typeof TEXT_COLOR;
