import { EmptyObject, IdRequest } from "./dto.types";

export type PropertyFilter =
  | {
      title: TextPropertyFilter;
      property: string;
      type?: "title";
    }
  | {
      rich_text: TextPropertyFilter;
      property: string;
      type?: "rich_text";
    }
  | {
      number: NumberPropertyFilter;
      property: string;
      type?: "number";
    }
  | {
      checkbox: CheckboxPropertyFilter;
      property: string;
      type?: "checkbox";
    }
  | {
      select: SelectPropertyFilter;
      property: string;
      type?: "select";
    }
  | {
      multi_select: MultiSelectPropertyFilter;
      property: string;
      type?: "multi_select";
    }
  | {
      date: DatePropertyFilter;
      property: string;
      type?: "date";
    }
  | {
      people: PeoplePropertyFilter;
      property: string;
      type?: "people";
    }
  | {
      files: ExistencePropertyFilter;
      property: string;
      type?: "files";
    }
  | {
      url: TextPropertyFilter;
      property: string;
      type?: "url";
    }
  | {
      email: TextPropertyFilter;
      property: string;
      type?: "email";
    }
  | {
      phone_number: TextPropertyFilter;
      property: string;
      type?: "phone_number";
    }
  | {
      relation: RelationPropertyFilter;
      property: string;
      type?: "relation";
    }
  | {
      created_by: PeoplePropertyFilter;
      property: string;
      type?: "created_by";
    }
  | {
      created_time: DatePropertyFilter;
      property: string;
      type?: "created_time";
    }
  | {
      last_edited_by: PeoplePropertyFilter;
      property: string;
      type?: "last_edited_by";
    }
  | {
      last_edited_time: DatePropertyFilter;
      property: string;
      type?: "last_edited_time";
    }
  | {
      formula: FormulaPropertyFilter;
      property: string;
      type?: "formula";
    }
  | {
      rollup: RollupPropertyFilter;
      property: string;
      type?: "rollup";
    };

type ExistencePropertyFilter =
  | {
      is_empty: true;
    }
  | {
      is_not_empty: true;
    };
type TextPropertyFilter =
  | {
      equals: string;
    }
  | {
      does_not_equal: string;
    }
  | {
      contains: string;
    }
  | {
      does_not_contain: string;
    }
  | {
      starts_with: string;
    }
  | {
      ends_with: string;
    }
  | ExistencePropertyFilter;
type NumberPropertyFilter =
  | {
      equals: number;
    }
  | {
      does_not_equal: number;
    }
  | {
      greater_than: number;
    }
  | {
      less_than: number;
    }
  | {
      greater_than_or_equal_to: number;
    }
  | {
      less_than_or_equal_to: number;
    }
  | ExistencePropertyFilter;
type CheckboxPropertyFilter =
  | {
      equals: boolean;
    }
  | {
      does_not_equal: boolean;
    };
type SelectPropertyFilter =
  | {
      equals: string;
    }
  | {
      does_not_equal: string;
    }
  | ExistencePropertyFilter;
type MultiSelectPropertyFilter =
  | {
      contains: string;
    }
  | {
      does_not_contain: string;
    }
  | ExistencePropertyFilter;
type DatePropertyFilter =
  | {
      equals: string;
    }
  | {
      before: string;
    }
  | {
      after: string;
    }
  | {
      on_or_before: string;
    }
  | {
      on_or_after: string;
    }
  | {
      past_week: EmptyObject;
    }
  | {
      past_month: EmptyObject;
    }
  | {
      past_year: EmptyObject;
    }
  | {
      next_week: EmptyObject;
    }
  | {
      next_month: EmptyObject;
    }
  | {
      next_year: EmptyObject;
    }
  | ExistencePropertyFilter;
type PeoplePropertyFilter =
  | {
      contains: IdRequest;
    }
  | {
      does_not_contain: IdRequest;
    }
  | ExistencePropertyFilter;
type RelationPropertyFilter =
  | {
      contains: IdRequest;
    }
  | {
      does_not_contain: IdRequest;
    }
  | ExistencePropertyFilter;
type FormulaPropertyFilter =
  | {
      string: TextPropertyFilter;
    }
  | {
      checkbox: CheckboxPropertyFilter;
    }
  | {
      number: NumberPropertyFilter;
    }
  | {
      date: DatePropertyFilter;
    };
type RollupSubfilterPropertyFilter =
  | {
      rich_text: TextPropertyFilter;
    }
  | {
      number: NumberPropertyFilter;
    }
  | {
      checkbox: CheckboxPropertyFilter;
    }
  | {
      select: SelectPropertyFilter;
    }
  | {
      multi_select: MultiSelectPropertyFilter;
    }
  | {
      relation: RelationPropertyFilter;
    }
  | {
      date: DatePropertyFilter;
    }
  | {
      people: PeoplePropertyFilter;
    }
  | {
      files: ExistencePropertyFilter;
    };
type RollupPropertyFilter =
  | {
      any: RollupSubfilterPropertyFilter;
    }
  | {
      none: RollupSubfilterPropertyFilter;
    }
  | {
      every: RollupSubfilterPropertyFilter;
    }
  | {
      date: DatePropertyFilter;
    }
  | {
      number: NumberPropertyFilter;
    };
