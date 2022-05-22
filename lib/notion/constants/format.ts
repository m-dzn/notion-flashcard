import dayjs from "dayjs";

export const FORMAT = {
  get LOCALE_DATE() {
    return dayjs().localeData().longDateFormat("LL");
  },
} as const;
