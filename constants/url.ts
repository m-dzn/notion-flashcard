const getApiPath = (path: string) => `/api${path}`;

export const URL = {
  HOME: "/",
  API: {
    CARD_LIST: getApiPath("/card-lists"),
  },
} as const;
