import { RichTextItemResponse } from "../types";

export function joinRichText(array: Array<RichTextItemResponse>) {
  return array.reduce(
    (acc: string, item: RichTextItemResponse) => acc + item.plain_text,
    ""
  );
}
