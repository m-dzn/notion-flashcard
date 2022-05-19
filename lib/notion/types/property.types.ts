import { PropertyType, NotionFormulaTypes } from "./constant.types";
import {
  TitleType,
  RichTextType,
  NumberType,
  SelectType,
  MultiSelectType,
  DateType,
  PeopleType,
  FilesType,
  CheckboxType,
  UrlType,
  EmailType,
  PhoneNumberType,
  FormulaType,
  RelationArrayType,
  RollupType,
  CreatedTimeType,
  CreatedByType,
  LastEditedTimeType,
  LastEditedByType,
  DateResponse,
  SelectPropertyResponse,
} from "./dto.types";

/* Notion Properties */
interface PropertySchema {
  id: string;
  name?: string;
  type: PropertyType;
}

export type TitleProperty = PropertySchema & TitleType;
export type RichTextProperty = PropertySchema & RichTextType;
export type NumberProperty = PropertySchema & NumberType;
export type SelectProperty = PropertySchema & SelectType;
export type MultiSelectProperty = PropertySchema & MultiSelectType;
export type DateProperty = PropertySchema & DateType;
export type PeopleProperty = PropertySchema & PeopleType;
export type FileProperty = PropertySchema & FilesType;
export type CheckboxProperty = PropertySchema & CheckboxType;
export type UrlProperty = PropertySchema & UrlType;
export type EmailProperty = PropertySchema & EmailType;
export type PhoneNumberProperty = PropertySchema & PhoneNumberType;
export type FormulaProperty = PropertySchema & FormulaType;
export type RelationProperty = PropertySchema & RelationArrayType;
export type RollupProperty = PropertySchema & RollupType;
export type CreatedTimeProperty = PropertySchema & CreatedTimeType;
export type CreatedByProperty = PropertySchema & CreatedByType;
export type LastEditedTimeProperty = PropertySchema & LastEditedTimeType;
export type LastEditedByProperty = PropertySchema & LastEditedByType;

/* Mapped Notion Properties */
export interface MappedProperty<T = any> {
  type?: PropertyType | NotionFormulaTypes;
  value?: T;
}
export type MappedSelect = MappedProperty<SelectPropertyResponse | null>;
export type MappedMultiSelect = MappedProperty<
  Array<SelectPropertyResponse | null>
>;
export type MappedDate = MappedProperty<DateResponse | null>;
export type MappedFormula = MappedProperty<
  string | number | boolean | DateResponse | null
>;
