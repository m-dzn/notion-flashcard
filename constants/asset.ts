const getAssetPath = (path1: string) => (path2: string) => `/${path1}/${path2}`;
const iconPath = getAssetPath("icons");
const imagePath = getAssetPath("images");

export const ICON: Record<string, any> = {
  rich_text: iconPath("rich-text.svg"),
  number: iconPath("number.svg"),
  select: iconPath("select.svg"),
  multi_select: iconPath("multi-select.svg"),
  date: iconPath("date.svg"),
  people: iconPath("people.svg"),
  files: iconPath("file-and-media.svg"),
  checkbox: iconPath("checkbox.svg"),
  url: iconPath("url.svg"),
  email: iconPath("email.svg"),
  phone_number: iconPath("phone.svg"),
  formula: iconPath("formula.svg"),
  relation: iconPath("relation.svg"),
  rollup: iconPath("rollup.svg"),
  created_time: iconPath("time.svg"),
  created_by: iconPath("person.svg"),
  get last_edited_time() {
    return this.created_time;
  },
  get last_edited_by() {
    return this.created_by;
  },
};

export const IMAGE: Record<string, any> = {
  checkbox: {
    unchecked: imagePath("checkbox-unchecked.svg"),
    checked: imagePath("checkbox-checked.svg"),
  },
};
