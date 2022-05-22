import React from "react";
import styled from "styled-components";

import { Seo } from "@/components/atoms";
import { APP } from "@/constants";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const FlashcardPageTemplate = ({ title, children }: Props) => {
  return (
    <>
      <Seo title={title} />
      <Template>
        <Title>{title || APP.NAME}</Title>
        <Main>{children}</Main>
      </Template>
    </>
  );
};

const pagePaddingH = 32;
const titleHeight = 120;
const cardGap = 16;
const cardMinWidth = 280;

const Template = styled.div`
  padding: 0 ${pagePaddingH}px;
`;

const Title = styled.h1`
  margin: 0;
  height: ${titleHeight}px;
  line-height: ${titleHeight}px;

  white-space: nowrap;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${cardMinWidth}px, 1fr));
  gap: ${cardGap}px;
`;
