import { RichTextItemResponse } from "../types";

export function getPlainRichTextItem(item: RichTextItemResponse) {
  return item.plain_text;
}

export function joinRichText(array: Array<RichTextItemResponse>) {
  return array.reduce(
    (acc: string, item: RichTextItemResponse) =>
      acc + getPlainRichTextItem(item),
    ""
  );
}
