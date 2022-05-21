import React, { memo } from "react";
import styled from "styled-components";

import { getSelectColor, SelectColor } from "@/lib/notion";
import { TOKEN } from "@/styles";

interface Props {
  item?: { name: string; color: SelectColor } | null;
}

export const Badge = memo(({ item }: Props) => {
  if (!item) return null;

  const { name, color } = item;
  const { background, textColor } = getSelectColor(color);

  return (
    <Wrapper background={background} textColor={textColor}>
      {name}
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
  font-size: ${TOKEN.FONT_SIZE.TINY}px;
  line-height: 120%;
`;
