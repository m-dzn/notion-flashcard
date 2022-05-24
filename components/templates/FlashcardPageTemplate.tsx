import React from "react";
import styled from "styled-components";

import { Seo } from "@/components/atoms";
import { APP } from "@/constants";

interface Props {
  title?: string;
  header: JSX.Element[];
  children: React.ReactNode;
}

export const FlashcardPageTemplate = ({ title, header, children }: Props) => {
  return (
    <>
      <Seo title={title} />
      <Template>
        <Header>
          <Title>{title || APP.NAME}</Title>
          {header}
        </Header>
        <Main>{children}</Main>
      </Template>
    </>
  );
};

const PAGE_PADDING_H = 32;
const PAGE_PADDING_BOTTOM = 64;

const HEADER_MARGIN_BOTTOM = 24;
const TITLE_HEIGHT = 120;
const CARD_GAP = 16;
const CARD_MIN_WIDTH = 280;

const Template = styled.div`
  padding: 0 ${PAGE_PADDING_H}px;
  padding-bottom: ${PAGE_PADDING_BOTTOM}px;
`;

const Header = styled.header`
  margin-bottom: ${HEADER_MARGIN_BOTTOM}px;
`;

const Title = styled.h1`
  margin: 0;
  height: ${TITLE_HEIGHT}px;
  line-height: ${TITLE_HEIGHT}px;

  white-space: nowrap;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${CARD_MIN_WIDTH}px, 1fr));
  gap: ${CARD_GAP}px;
`;
