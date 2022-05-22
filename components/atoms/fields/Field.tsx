import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { TEXT_COLOR } from "@/lib/notion";
import { customScrollbar, ellipsis, TOKEN } from "@/styles";

const ICON_SIZE = 16;

interface Props {
  icon?: string;
  label: string;
  children: React.ReactNode;
}

export const Field = ({ icon, label, children }: Props) => {
  return (
    <Container>
      <Header>
        <Label>
          {icon && (
            <Image src={icon} alt="icon" width={ICON_SIZE} height={ICON_SIZE} />
          )}
          <span className="label">{label}</span>
        </Label>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

const LINE_HEIGHT = 28;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Header = styled.div``;

const Label = styled.label`
  width: 96px;
  min-height: ${LINE_HEIGHT}px;
  padding: 0 6px;

  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  color: ${TEXT_COLOR.default}A6;
  font-size: ${TOKEN.FONT_SIZE.TINY}px;

  overflow: hidden;

  span {
    flex-shrink: 0;
  }

  .label {
    flex-shrink: 1;
    flex-basis: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Body = styled.div`
  padding: 0 8px;

  line-height: ${LINE_HEIGHT}px;

  display: flex;
  align-items: center;
  overflow: hidden;

  ${customScrollbar("x")}
`;
