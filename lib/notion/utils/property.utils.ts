import {
  MappedProperty,
  CheckboxProperty,
  DateProperty,
  FormulaProperty,
  MultiSelectProperty,
  RichTextProperty,
  SelectProperty,
  TitleProperty,
  MappedFormula,
  MappedMultiSelect,
  MappedDate,
  MappedSelect,
} from "../types";

import { joinRichText } from "./richText.utils";
import {
  isCheckboxProperty,
  isDateProperty,
  isFormulaProperty,
  isMultiSelectProperty,
  isRichTextProperty,
  isSelectProperty,
  isTitleProperty,
} from "./typeGuard.utils";

/* Public Functions */
export function mapProperty(prop: TitleProperty): MappedProperty<String>;
export function mapProperty(prop: RichTextProperty): MappedProperty<String>;
export function mapProperty(prop: SelectProperty): MappedSelect;
export function mapProperty(prop: MultiSelectProperty): MappedMultiSelect;
export function mapProperty(prop: CheckboxProperty): MappedProperty<boolean>;
export function mapProperty(prop: DateProperty): MappedDate;
export function mapProperty(prop: FormulaProperty): MappedFormula;
export function mapProperty(prop: any): MappedProperty {
  if (isTitleProperty(prop)) return getTitleText(prop);
  else if (isRichTextProperty(prop)) return getRichText(prop);
  else if (isSelectProperty(prop)) return getSelect(prop);
  else if (isMultiSelectProperty(prop)) return getMultiSelect(prop);
  else if (isCheckboxProperty(prop)) return getCheckbox(prop);
  else if (isDateProperty(prop)) return getDate(prop);
  else if (isFormulaProperty(prop)) return getFormula(prop);

  return { type: undefined, value: undefined };
}

/* Private functions */
function getTitleText(prop: TitleProperty): MappedProperty<string> {
  return {
    type: prop.type,
    value: joinRichText(prop.title),
  };
}
function getRichText(prop: RichTextProperty): MappedProperty<string> {
  return {
    type: prop.type,
    value: joinRichText(prop.rich_text),
  };
}
function getSelect({ type, select }: SelectProperty): MappedSelect {
  return {
    type,
    value: select,
  };
}
function getMultiSelect({
  type,
  multi_select,
}: MultiSelectProperty): MappedMultiSelect {
  return {
    type,
    value: multi_select,
  };
}
function getCheckbox({
  type,
  checkbox,
}: CheckboxProperty): MappedProperty<boolean> {
  return { type, value: checkbox };
}
function getDate({ type, date }: DateProperty): MappedDate {
  return { type, value: date };
}
function getFormula({ formula }: any): MappedFormula {
  const { type } = formula;
  return { type, value: formula[type] };
}
