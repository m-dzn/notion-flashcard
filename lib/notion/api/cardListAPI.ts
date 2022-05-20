import { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

import { notionClient } from "./client";

interface QueryOptions {
  pageSize?: number;
  filter?: QueryDatabaseParameters["filter"];
  priorities?: QueryDatabaseParameters["sorts"];
}

export async function getCardList(
  databaseId: string,
  { pageSize = 10, filter, priorities }: QueryOptions = {}
) {
  const { results, next_cursor, has_more } = await notionClient.databases.query(
    {
      database_id: databaseId,
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
