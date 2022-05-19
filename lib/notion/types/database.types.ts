import { EmojiType, ExternalType, FileType, UserIdResponse } from "./dto.types";
import {
  TitleProperty,
  RichTextProperty,
  RelationProperty,
  DateProperty,
  MultiSelectProperty,
  CheckboxProperty,
  FormulaProperty,
  SelectProperty,
} from "./property.types";

/* Common */
interface QueryDatabaseResponse {
  id: string;
  object: "page";
  created_time: string;
  created_by: UserIdResponse;
  last_edited_time: string;
  last_edited_by: UserIdResponse;
  archived: boolean;
  url: string;

  icon: EmojiType | ExternalType | FileType | null;
  cover: ExternalType | FileType | null;

  properties: Record<string, any>;
}

/* Specific Databases */
export interface FlashcardPage extends QueryDatabaseResponse {
  properties: {
    "이름": TitleProperty;
    "Eng": RichTextProperty;
    "마지막 학습일": DateProperty;
    "분류": MultiSelectProperty;
    "빈출": CheckboxProperty;
    "타입": SelectProperty;
    "중요도": SelectProperty;
    "학습 상태": SelectProperty;
    "설명 가능": FormulaProperty;
    "학습 완료": FormulaProperty;
    "연관 그룹": RelationProperty;
    "관련 질문": RelationProperty;
  };
}
