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
  PartialUserResponse,
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

/* */
export type RenderFunction<T> = ({
  data,
  id,
}: {
  data: T;
  id: string;
}) => JSX.Element;

export interface RenderTable {
  title: RenderFunction<string>;
  rich_text: RenderFunction<string>;
  select: RenderFunction<SelectPropertyResponse | null>;
  multi_select: RenderFunction<Array<SelectPropertyResponse | null>>;
  date: RenderFunction<DateResponse>;
  people: RenderFunction<PartialUserResponse[]>;
  files: RenderFunction<FilesObject["files"]>;
  checkbox: RenderFunction<CheckboxObject["checkbox"]>;
  url: RenderFunction<UrlObject["url"]>;
  email: RenderFunction<EmailObject["email"]>;
  phone_number: RenderFunction<PhoneNumberObject["phone_number"]>;
  rollup: RenderFunction<MappedRollup>;
}
