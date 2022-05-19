import React, { memo } from "react";
import styled from "styled-components";

import { getNotionSelectColor, NotionSelectColors } from "@/lib/notion";

interface Props {
  item?: [string | undefined, NotionSelectColors | undefined];
}

export const Badge = memo(({ item }: Props) => {
  if (!item || !item[0] || !item[1]) return null;

  const [label, color] = item;
  const { background, textColor } = getNotionSelectColor(color);

  return (
    <Wrapper background={background} textColor={textColor}>
      {label}
    </Wrapper>
  );
});

Badge.displayName = "Badge";

const Wrapper = styled.span<{ background?: string; textColor?: string }>`
  background: ${({ background }) => background};
  height: 18px;
  padding: 1px 6px;

  border-radius: 3px;

  color: ${({ textColor }) => textColor};
  font-size: 12px;
  line-height: 120%;
`;
