import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import localeData from "dayjs/plugin/localeData";
import "dayjs/locale/ko";

import { FORMAT, FORMULA_TYPE, PROPERTY_TYPE, ROLLUP_TYPE } from "../constants";
import {
  RenderTable,
  PropertySchema,
  TitleProperty,
  SelectProperty,
  DateProperty,
  RichTextProperty,
  MultiSelectProperty,
  CheckboxProperty,
  RenderFunction,
  NumberProperty,
  PeopleProperty,
  FilesProperty,
  UrlProperty,
  EmailProperty,
  PhoneNumberProperty,
  FormulaProperty,
  CreatedTimeProperty,
  CreatedByProperty,
  LastEditedTimeProperty,
  LastEditedByProperty,
  RollupProperty,
  ArrayRollupResponse,
} from "../types";

import { getPlainRichTextItem, joinRichText } from "./richText.utils";
import {
  isCheckboxProperty,
  isCreatedByProperty,
  isCreatedTimeProperty,
  isDateProperty,
  isEmailProperty,
  isFilesProperty,
  isFormulaProperty,
  isLastEditedByProperty,
  isLastEditedTimeProperty,
  isMultiSelectProperty,
  isNumberProperty,
  isPeopleProperty,
  isPhoneNumberProperty,
  isRichTextProperty,
  isRollupProperty,
  isSelectProperty,
  isTitleProperty,
  isTitleRollup,
  isUrlProperty,
} from "./typeGuard.utils";

dayjs.locale("ko");
dayjs.extend(localizedFormat);
dayjs.extend(localeData);

export function mapPropToJSX<T extends PropertySchema>(
  prop: T,
  renderTable: RenderTable
): JSX.Element | null {
  if (!prop) return null;

  const { type, data: mappedData } = mapProperty(prop);

  if (type in renderTable && (mappedData || mappedData === false)) {
    const render: RenderFunction<any> = renderTable[type];
    return render({ data: mappedData, id: prop.id });
  }

  return null;
}

/* Property Mapping Functions */
export function mapProperty(prop: PropertySchema) {
  if (isTitleProperty(prop)) return mapTitleProp(prop);
  else if (isRichTextProperty(prop)) return mapRichTextProp(prop);
  else if (isNumberProperty(prop)) return mapNumberProp(prop);
  else if (isSelectProperty(prop)) return mapSelectProp(prop);
  else if (isMultiSelectProperty(prop)) return mapMultiSelectProp(prop);
  else if (isDateProperty(prop)) return mapDateProp(prop);
  else if (isPeopleProperty(prop)) return mapPeopleProp(prop);
  else if (isFilesProperty(prop)) return mapFilesProp(prop);
  else if (isCheckboxProperty(prop)) return mapCheckBoxProp(prop);
  else if (isUrlProperty(prop)) return mapUrlProp(prop);
  else if (isEmailProperty(prop)) return mapEmailProp(prop);
  else if (isPhoneNumberProperty(prop)) return mapPhoneNumberProp(prop);
  else if (isFormulaProperty(prop)) return mapFormulaProp(prop);
  else if (isRollupProperty(prop)) return mapRollupProp(prop);
  else if (isCreatedTimeProperty(prop)) return mapCreatedTimeProp(prop);
  else if (isCreatedByProperty(prop)) return mapCreatedByProp(prop);
  else if (isLastEditedTimeProperty(prop)) return mapLastEditedTimeProp(prop);
  else if (isLastEditedByProperty(prop)) return mapLastEditedByProp(prop);

  return { type: "", data: undefined };
}

function mapTitleProp({ type, title }: TitleProperty) {
  return { type, data: joinRichText(title) };
}
function mapRichTextProp({ type, rich_text }: RichTextProperty) {
  return { type, data: joinRichText(rich_text) };
}
function mapNumberProp({ number }: NumberProperty) {
  return { type: PROPERTY_TYPE.rich_text, data: number };
}
function mapSelectProp({ type, select }: SelectProperty) {
  return { type, data: select };
}
function mapMultiSelectProp({ type, multi_select }: MultiSelectProperty) {
  return { type, data: multi_select };
}
function mapDateProp({ type, date }: DateProperty) {
  return {
    type,
    data: {
      ...date,
      start: date && dayjs(date.start).format(FORMAT.LOCALE_DATE),
      end: date?.end && dayjs(date.end).format(FORMAT.LOCALE_DATE),
    },
  };
}
function mapPeopleProp({ type, people }: PeopleProperty) {
  return { type, data: people };
}
function mapFilesProp({ type, files }: FilesProperty) {
  return { type, data: files };
}
function mapCheckBoxProp({ type, checkbox }: CheckboxProperty) {
  return { type, data: checkbox };
}
function mapUrlProp({ type, url }: UrlProperty) {
  return { type, data: url };
}
function mapEmailProp({ type, email }: EmailProperty) {
  return { type, data: email };
}
function mapPhoneNumberProp({ phone_number }: PhoneNumberProperty) {
  return { type: PROPERTY_TYPE.rich_text, data: phone_number };
}
function mapFormulaProp({ id, formula }: FormulaProperty) {
  const { string, number, boolean, date } = FORMULA_TYPE;

  if (string in formula)
    return { type: PROPERTY_TYPE.rich_text, data: formula[string] };
  else if (number in formula)
    return { type: PROPERTY_TYPE.rich_text, data: formula[number] };
  else if (boolean in formula)
    return { type: PROPERTY_TYPE.checkbox, data: formula[boolean] };
  else if (date in formula) {
    return mapDateProp({ id, type: PROPERTY_TYPE.date, date: formula.date });
  }

  return { type: "", data: undefined };
}
function mapRollupProp(prop: RollupProperty) {
  const { array } = ROLLUP_TYPE;
  const rollup = prop.rollup;

  if (array in rollup) {
    return mapArrayRollupProp(rollup);
  }

  return { type: "", data: undefined };
}
function mapArrayRollupProp({ array }: ArrayRollupResponse) {
  if (array.length > 0) {
    if (isTitleRollup(array)) {
      const data = array[0].title.map((item) => getPlainRichTextItem(item));
      return { type: PROPERTY_TYPE.rollup, data };
    }
  }

  return { type: "", data: undefined };
}
function mapCreatedTimeProp({ created_time: date }: CreatedTimeProperty) {
  return {
    type: PROPERTY_TYPE.rich_text,
    data: dayjs(date).format(FORMAT.LOCALE_DATE),
  };
}
function mapCreatedByProp({ created_by }: CreatedByProperty) {
  return {
    type: PROPERTY_TYPE.people,
    data: [created_by],
  };
}
function mapLastEditedTimeProp({
  id,
  last_edited_time,
}: LastEditedTimeProperty) {
  return mapCreatedTimeProp({
    id,
    type: PROPERTY_TYPE.created_time,
    created_time: last_edited_time,
  });
}
function mapLastEditedByProp({ id, last_edited_by }: LastEditedByProperty) {
  return mapCreatedByProp({
    id,
    type: PROPERTY_TYPE.created_by,
    created_by: last_edited_by,
  });
}
