import { NextApiRequest, NextApiResponse } from "next";

import { NOTION } from "@/constants";
import { CardListQueryResult, getCardList, QueryOptions } from "@/lib/notion";

type Data = CardListQueryResult;

type CardListQueryRequest = NextApiRequest & {
  body: QueryOptions;
};

export default async function handler(
  req: CardListQueryRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === "POST") {
    const data = await getCardList(NOTION.DATABASE_ID, req.body);
    return res.status(200).json(data);
  }
}
