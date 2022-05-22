import React from "react";
import styled from "styled-components";

import { ellipsis, TOKEN } from "@/styles";

interface Props {
  children: React.ReactNode;
}

export const RichText = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.p`
  margin: 0;
  font-size: ${TOKEN.FONT_SIZE.SMALL}px;
  text-align: center;

  ${ellipsis(1)}
`;
