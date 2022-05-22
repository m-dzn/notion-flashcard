import { PropertyType } from "./constant.types";
import {
  TitleObject,
  RichTextObject,
  NumberObject,
  SelectObject,
  MultiSelectObject,
  DateObject,
  PeopleObject,
  FilesObject,
  CheckboxObject,
  UrlObject,
  EmailObject,
  PhoneNumberObject,
  FormulaObject,
  RelationArrayObject,
  RollupObject,
  CreatedTimeObject,
  CreatedByObject,
  LastEditedTimeObject,
  LastEditedByObject,
  DateResponse,
  SelectPropertyResponse,
} from "./dto.types";

/* Notion Properties */
export interface PropertySchema {
  id: string;
  name?: string;
  type: PropertyType;
}

export type TitleProperty = PropertySchema & TitleObject;
export type RichTextProperty = PropertySchema & RichTextObject;
export type NumberProperty = PropertySchema & NumberObject;
export type SelectProperty = PropertySchema & SelectObject;
export type MultiSelectProperty = PropertySchema & MultiSelectObject;
export type DateProperty = PropertySchema & DateObject;
export type PeopleProperty = PropertySchema & PeopleObject;
export type FilesProperty = PropertySchema & FilesObject;
export type CheckboxProperty = PropertySchema & CheckboxObject;
export type UrlProperty = PropertySchema & UrlObject;
export type EmailProperty = PropertySchema & EmailObject;
export type PhoneNumberProperty = PropertySchema & PhoneNumberObject;
export type FormulaProperty = PropertySchema & FormulaObject;
export type RelationProperty = PropertySchema & RelationArrayObject;
export type RollupProperty = PropertySchema & RollupObject;
export type CreatedTimeProperty = PropertySchema & CreatedTimeObject;
export type CreatedByProperty = PropertySchema & CreatedByObject;
export type LastEditedTimeProperty = PropertySchema & LastEditedTimeObject;
export type LastEditedByProperty = PropertySchema & LastEditedByObject;

/* Mapped Notion Properties */
export type MappedRollup = string[] | undefined;
