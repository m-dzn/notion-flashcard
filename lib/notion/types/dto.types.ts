import {
  NotionSelectColors,
  NotionTextColors,
  RollupFunction,
} from "./constant.types";
import { EmojiRequest } from "./emoji.types";
import { TimeZoneRequest } from "./timezone.types";

/* Common */
export type EmptyObject = Record<string, never>;
export type IdRequest = string | string;
type StringRequest = string;
type TextRequest = string;

/* Responses */
// RichText Responses
interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: NotionTextColors;
}
interface RichTextItem {
  annotations: Annotations;
  plain_text: string;
  href: string | null;
}
type RichTextText = RichTextItem & TextType;
type RichTextMention = RichTextItem & MentionType;
type RichTextEquation = RichTextItem & EquationType;
export type RichTextItemResponse =
  | RichTextText
  | RichTextMention
  | RichTextEquation;

export interface SelectPropertyResponse {
  id: StringRequest;
  name: StringRequest;
  color: NotionSelectColors;
}

export interface DateResponse {
  start: string;
  end: string | null;
  time_zone: TimeZoneRequest | null;
}

// People Responses
export interface UserIdResponse {
  id: IdRequest;
  object: "user";
}
interface SimpleUserResponse extends UserIdResponse {
  name: string | null;
  avatar_url: string | null;
}
type PersonResponse = SimpleUserResponse & PersonType;
type BotResponse = SimpleUserResponse & BotType;
type UserResponse = PersonResponse | BotResponse;
type PartialUserResponse = UserIdResponse | UserResponse;

// File Responses
interface InternalFileResponse extends FileType {
  name: StringRequest;
}
interface ExternalFileResponse extends ExternalType {
  name: StringRequest;
}

// Rollup Responses
interface RollupFunctionResponse {
  function: RollupFunction;
}
type NumberRollupResponse = RollupFunctionResponse & NumberType;
type DateRollupResponse = RollupFunctionResponse & DateType;
type ArrayRollupResponse = RollupFunctionResponse & ArrayRollupType;

/* Types */
// Primitive Types
export interface StringType {
  type: "string";
  string: string | null;
}
export interface NumberType {
  type: "number";
  number: number | null;
}
export interface BooleanType {
  type: "boolean";
  boolean: boolean | null;
}

// Object Types
export interface EmojiType {
  type: "emoji";
  emoji: EmojiRequest;
}
export interface WorkspaceType {
  type: "workspace";
  workspace: true;
}
export interface PersonType {
  type: "person";
  person: {
    email?: string;
  };
}
export interface BotType {
  type: "bot";
  bot:
    | EmptyObject
    | {
        owner:
          | {
              type: "user";
              user: PersonResponse | UserIdResponse;
            }
          | WorkspaceType;
      };
}
export interface LinkPreviewType {
  type: "link_preview";
  link_preview: {
    url: TextRequest;
  };
}
export interface TemplateMentionType {
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
export interface PageType {
  type: "page";
  page: {
    id: IdRequest;
  };
}
export interface DatabaseType {
  type: "database";
  database: {
    id: IdRequest;
  };
}
export interface FileType {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
}
export interface ExternalType {
  type: "external";
  external: {
    url: TextRequest;
  };
}

// Inline Types
export interface TextType {
  type: "text";
  text: {
    content: string;
    link: {
      url: TextRequest;
    } | null;
  };
}
export interface EquationType {
  type: "equation";
  equation: {
    expression: TextRequest;
  };
}
export interface MentionType {
  type: "mention";
  mention:
    | UserType
    | DateType
    | LinkPreviewType
    | TemplateMentionType
    | PageType
    | DatabaseType;
}

// Database Property Types
export interface TitleType {
  type: "title";
  title: Array<RichTextItemResponse>;
}
export interface RichTextType {
  type: "rich_text";
  rich_text: Array<RichTextItemResponse>;
}
export interface SelectType {
  type: "select";
  select: SelectPropertyResponse | null;
}
export interface MultiSelectType {
  type: "multi_select";
  multi_select: Array<SelectPropertyResponse>;
}
export interface DateType {
  type: "date";
  date: DateResponse | null;
}
interface UserType {
  type: "user";
  user: PartialUserResponse;
}
export interface PeopleType {
  type: "people";
  people: Array<PartialUserResponse>;
}
export interface FilesType {
  type: "files";
  files: Array<InternalFileResponse | ExternalFileResponse>;
}
export interface CheckboxType {
  type: "checkbox";
  checkbox: boolean;
}
export interface UrlType {
  type: "url";
  url: string | null;
}
export interface EmailType {
  type: "email";
  email: string | null;
}
export interface PhoneNumberType {
  type: "phone_number";
  phone_number: string | null;
}
export interface FormulaType {
  type: "formula";
  formula: StringType | DateType | NumberType | BooleanType;
}
export interface RelationArrayType {
  type: "relation";
  relation: Array<{
    id: string;
  }>;
}
interface ArrayRollupType {
  type: "array";
  array: Array<TitleType | RichTextType | PeopleType | RelationArrayType>;
}
export interface RollupType {
  type: "rollup";
  rollup: NumberRollupResponse | DateRollupResponse | ArrayRollupResponse;
}
export interface CreatedTimeType {
  type: "created_time";
  created_time: string;
}
export interface CreatedByType {
  type: "created_by";
  created_by: PartialUserResponse;
}
export interface LastEditedByType {
  type: "last_edited_by";
  last_edited_by: PartialUserResponse;
}
export interface LastEditedTimeType {
  type: "last_edited_time";
  last_edited_time: string;
}
