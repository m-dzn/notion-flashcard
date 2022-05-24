import {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { notionClient } from "./client";

export interface QueryOptions {
  startCursor?: string;
  pageSize?: number;
  filter?: QueryDatabaseParameters["filter"];
  priorities?: QueryDatabaseParameters["sorts"];
}

export interface CardListQueryResult {
  cardList: QueryDatabaseResponse["results"];
  next_cursor: string | null;
  has_more: boolean;
}

export async function getCardList(
  databaseId: string,
  { startCursor, pageSize = 10, filter, priorities }: QueryOptions = {}
): Promise<CardListQueryResult> {
  const { results, next_cursor, has_more } = await notionClient.databases.query(
    {
      database_id: databaseId,
      start_cursor: startCursor,
      page_size: pageSize,
      filter,
      sorts: priorities,
    }
  );

  return {
    cardList: results,
    next_cursor,
    has_more,
  };
}

export async function getCardListDBSchema(databaseId: string) {
  const res = await notionClient.databases.retrieve({
    database_id: databaseId,
  });

  return res;
}
