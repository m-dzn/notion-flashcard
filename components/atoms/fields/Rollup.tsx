import React from "react";
import styled from "styled-components";

import { MappedRollup } from "@/lib/notion";
import { TOKEN } from "@/styles";

interface Props {
  prop: MappedRollup;
}

export const Rollup = ({ prop }: Props) => {
  return (
    <div>
      {prop?.map((item) => (
        <RichText key={item}>{item}</RichText>
      ))}
    </div>
  );
};

const RichText = styled.div`
  font-size: ${TOKEN.FONT_SIZE.SMALL}px;
`;
