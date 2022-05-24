import { NextApiRequest, NextApiResponse } from "next";

import { getToday } from "@/lib";
import { notionClient } from "@/lib/notion";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { cardId } = req.query;

  if (method === "PATCH") {
    const { propName } = req.body;
    if (!(typeof cardId === "string")) res.status(400).end();
    await notionClient.pages.update({
      page_id: cardId as string,
      properties: {
        [propName]: {
          date: {
            start: getToday(),
          },
        },
      },
    });
    res.status(200).end();
  }
}
