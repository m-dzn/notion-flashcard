import { PROPERTY_TYPE as type } from "../constants";
import {
  TitleProperty,
  RichTextProperty,
  NumberProperty,
  SelectProperty,
  MultiSelectProperty,
  DateProperty,
  PeopleProperty,
  FilesProperty,
  CheckboxProperty,
  UrlProperty,
  EmailProperty,
  PhoneNumberProperty,
  FormulaProperty,
  RelationProperty,
  RollupProperty,
  CreatedTimeProperty,
  CreatedByProperty,
  LastEditedTimeProperty,
  LastEditedByProperty,
  TitleObject,
  PropertyType,
  RollupType,
} from "../types";

const isTypeProperty = (prop: any, type: PropertyType | RollupType) =>
  type in prop ? prop[type] !== undefined : false;

export const isTitleProperty = (prop: any): prop is TitleProperty =>
  isTypeProperty(prop, type.title);

export const isRichTextProperty = (prop: any): prop is RichTextProperty =>
  isTypeProperty(prop, type.rich_text);

export const isNumberProperty = (prop: any): prop is NumberProperty =>
  isTypeProperty(prop, type.number);

export const isSelectProperty = (prop: any): prop is SelectProperty =>
  isTypeProperty(prop, type.select);

export const isMultiSelectProperty = (prop: any): prop is MultiSelectProperty =>
  isTypeProperty(prop, type.multi_select);

export const isDateProperty = (prop: any): prop is DateProperty =>
  isTypeProperty(prop, type.date);

export const isPeopleProperty = (prop: any): prop is PeopleProperty =>
  isTypeProperty(prop, type.people);

export const isFilesProperty = (prop: any): prop is FilesProperty =>
  isTypeProperty(prop, type.files);

export const isCheckboxProperty = (prop: any): prop is CheckboxProperty =>
  isTypeProperty(prop, type.checkbox);

export const isUrlProperty = (prop: any): prop is UrlProperty =>
  isTypeProperty(prop, type.url);

export const isEmailProperty = (prop: any): prop is EmailProperty =>
  isTypeProperty(prop, type.email);

export const isPhoneNumberProperty = (prop: any): prop is PhoneNumberProperty =>
  isTypeProperty(prop, type.phone_number);

export const isFormulaProperty = (prop: any): prop is FormulaProperty =>
  isTypeProperty(prop, type.formula);

export const isRelationProperty = (prop: any): prop is RelationProperty =>
  isTypeProperty(prop, type.relation);

export const isRollupProperty = (prop: any): prop is RollupProperty =>
  isTypeProperty(prop, type.rollup);

export const isCreatedTimeProperty = (prop: any): prop is CreatedTimeProperty =>
  isTypeProperty(prop, type.created_time);

export const isCreatedByProperty = (prop: any): prop is CreatedByProperty =>
  isTypeProperty(prop, type.created_by);

export const isLastEditedTimeProperty = (
  prop: any
): prop is LastEditedTimeProperty =>
  isTypeProperty(prop, type.last_edited_time);

export const isLastEditedByProperty = (
  prop: any
): prop is LastEditedByProperty => isTypeProperty(prop, type.last_edited_by);

/* Rollup Type Guards */
export const isTitleRollup = (array: any): array is Array<TitleObject> =>
  isTitleProperty(array[0]);
