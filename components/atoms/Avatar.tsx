import React from "react";
import styled from "styled-components";

import { IMAGE } from "@/constants";
import { TOKEN } from "@/styles";

interface Props {
  avatarUrl: string | null;
  name?: string | null;
}

export const Avatar = ({ avatarUrl, name }: Props) => {
  return (
    <Container>
      <img src={avatarUrl || IMAGE.placeholder.avatar} alt="User avatar" />
      {name && <span>{name}</span>}
    </Container>
  );
};

const AVATAR_SIZE = 20;

const Container = styled.div`
  min-width: 0;

  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  overflow: hidden;

  img {
    width: ${AVATAR_SIZE}px;
    height: ${AVATAR_SIZE}px;
    border-radius: 50%;
    display: block;
  }

  span {
    font-size: ${TOKEN.FONT_SIZE.SMALL}px;
  }
`;
