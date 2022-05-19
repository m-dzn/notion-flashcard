import React from "react";
import Head from "next/head";

import { APP } from "@/constants";

interface Props {
  title?: string;
}

export const Seo = ({ title }: Props) => {
  const documentTitle = title ? `${title} | ${APP.NAME}` : APP.NAME;

  return (
    <Head>
      <title>{documentTitle}</title>
      <meta name="description" content={APP.DESCRIPTION} />
    </Head>
  );
};
