import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { TEXT_COLOR } from "@/lib/notion";
import { customScrollbar, TOKEN } from "@/styles";

const ICON_SIZE = 16;

interface Props {
  icon?: string;
  label: string;
  children: React.ReactNode;
}

export const Field = ({ icon, label, children }: Props) => {
  return (
    <Container>
      <Label>
        {icon && (
          <Image src={icon} alt="icon" width={ICON_SIZE} height={ICON_SIZE} />
        )}
        {label}
      </Label>
      <Body>{children}</Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Label = styled.label`
  width: 96px;
  padding: 0 6px;

  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  color: ${TEXT_COLOR.default}A6;
  font-size: ${TOKEN.FONT_SIZE.TINY}px;
`;

const Body = styled.div`
  height: 28px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  overflow: hidden;

  ${customScrollbar("x")}
`;
