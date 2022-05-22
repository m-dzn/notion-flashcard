import { SelectColor, TextColor, RollupFunction } from "./constant.types";
import { EmojiRequest } from "./emoji.types";
import { TimeZoneRequest } from "./timezone.types";

/* Common */
type EmptyObject = Record<string, never>;
type IdRequest = string | string;
type StringRequest = string;
type TextRequest = string;

/* Responses */
// Global Responses
export type IconResponse = EmojiObject | ExternalObject | FileObject;
export type CoverResponse = ExternalObject | FileObject;

// RichText Responses
interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: TextColor;
}
interface RichTextItem {
  annotations: Annotations;
  plain_text: string;
  href: string | null;
}
type RichTextText = RichTextItem & TextObject;
type RichTextMention = RichTextItem & MentionObject;
type RichTextEquation = RichTextItem & EquationObject;
export type RichTextItemResponse =
  | RichTextText
  | RichTextMention
  | RichTextEquation;

export interface SelectPropertyResponse {
  id: StringRequest;
  name: StringRequest;
  color: SelectColor;
}

export interface DateResponse {
  start: string;
  end: string | null;
  time_zone: TimeZoneRequest | null;
}

// People Responses
interface UserIdResponse {
  id: IdRequest;
  object: "user";
}
interface SimpleUserResponse extends UserIdResponse {
  name: string | null;
  avatar_url: string | null;
}
type PersonResponse = SimpleUserResponse & PersonObject;
type BotResponse = SimpleUserResponse & BotObject;
type UserResponse = PersonResponse | BotResponse;
type PartialUserResponse = UserIdResponse | UserResponse;

// File Responses
interface InternalFileResponse extends FileObject {
  name: StringRequest;
}
interface ExternalFileResponse extends ExternalObject {
  name: StringRequest;
}

// Rollup Responses
interface RollupFunctionResponse {
  function: RollupFunction;
}
export type NumberRollupResponse = RollupFunctionResponse & NumberObject;
export type DateRollupResponse = RollupFunctionResponse & DateObject;
export type ArrayRollupResponse = RollupFunctionResponse & ArrayRollupObject;

/* Objects */
// Primitive Objects
export interface StringObject {
  type: "string";
  string: string | null;
}
export interface NumberObject {
  type: "number";
  number: number | null;
}
export interface BooleanObject {
  type: "boolean";
  boolean: boolean | null;
}

// Global Objects
export interface EmojiObject {
  type: "emoji";
  emoji: EmojiRequest;
}
export interface WorkspaceObject {
  type: "workspace";
  workspace: true;
}
export interface PersonObject {
  type: "person";
  person: {
    email?: string;
  };
}
export interface BotObject {
  type: "bot";
  bot:
    | EmptyObject
    | {
        owner:
          | {
              type: "user";
              user: PersonResponse | UserIdResponse;
            }
          | WorkspaceObject;
      };
}
export interface LinkPreviewObject {
  type: "link_preview";
  link_preview: {
    url: TextRequest;
  };
}
export interface TemplateMentionObject {
  type: "template_mention";
  template_mention:
    | {
        type: "template_mention_date";
        template_mention_date: "today" | "now";
      }
    | {
        type: "template_mention_user";
        template_mention_user: "me";
      };
}
export interface PageObject {
  type: "page";
  page: {
    id: IdRequest;
  };
}
export interface DatabaseObject {
  type: "database";
  database: {
    id: IdRequest;
  };
}
export interface DatabaseIdObject {
  type: "database_id";
  database_id: IdRequest;
}
export interface FileObject {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
}
export interface ExternalObject {
  type: "external";
  external: {
    url: TextRequest;
  };
}

// Inline Objects
export interface TextObject {
  type: "text";
  text: {
    content: string;
    link: {
      url: TextRequest;
    } | null;
  };
}
export interface EquationObject {
  type: "equation";
  equation: {
    expression: TextRequest;
  };
}
export interface MentionObject {
  type: "mention";
  mention:
    | UserObject
    | DateObject
    | LinkPreviewObject
    | TemplateMentionObject
    | PageObject
    | DatabaseObject;
}

// Database Property Objects
export interface TitleObject {
  type: "title";
  title: Array<RichTextItemResponse>;
}
export interface RichTextObject {
  type: "rich_text";
  rich_text: Array<RichTextItemResponse>;
}
export interface SelectObject {
  type: "select";
  select: SelectPropertyResponse | null;
}
export interface MultiSelectObject {
  type: "multi_select";
  multi_select: Array<SelectPropertyResponse>;
}
export interface DateObject {
  type: "date";
  date: DateResponse | null;
}
interface UserObject {
  type: "user";
  user: PartialUserResponse;
}
export interface PeopleObject {
  type: "people";
  people: Array<PartialUserResponse>;
}
export interface FilesObject {
  type: "files";
  files: Array<InternalFileResponse | ExternalFileResponse>;
}
export interface CheckboxObject {
  type: "checkbox";
  checkbox: boolean;
}
export interface UrlObject {
  type: "url";
  url: string | null;
}
export interface EmailObject {
  type: "email";
  email: string | null;
}
export interface PhoneNumberObject {
  type: "phone_number";
  phone_number: string | null;
}
export interface FormulaObject {
  type: "formula";
  formula: StringObject | DateObject | NumberObject | BooleanObject;
}
export interface RelationArrayObject {
  type: "relation";
  relation: Array<{
    id: string;
  }>;
}
interface ArrayRollupObject {
  type: "array";
  array: Array<any>;
}
export interface RollupObject {
  type: "rollup";
  rollup: NumberRollupResponse | DateRollupResponse | ArrayRollupResponse;
}
export interface CreatedTimeObject {
  type: "created_time";
  created_time: string;
}
export interface CreatedByObject {
  type: "created_by";
  created_by: PartialUserResponse;
}
export interface LastEditedByObject {
  type: "last_edited_by";
  last_edited_by: PartialUserResponse;
}
export interface LastEditedTimeObject {
  type: "last_edited_time";
  last_edited_time: string;
}
