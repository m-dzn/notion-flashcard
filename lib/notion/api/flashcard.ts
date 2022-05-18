import { notionClient } from "./client";

const databaseId = process.env.NOTION_DATABASE_ID as string;

export const getFlashcards = async () =>
  notionClient.databases.query({ database_id: databaseId });
