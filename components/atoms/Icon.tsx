import React from "react";
import styled from "styled-components";

import { EmojiObject, ExternalObject, FileObject } from "@/lib/notion";

interface Props {
  icon: EmojiObject | ExternalObject | FileObject | null;
}

export const Icon = ({ icon }: Props) => {
  let Icon;

  if (!icon) {
    Icon = null;
  } else if ("emoji" in icon) {
    Icon = icon.emoji;
  } else if ("external" in icon) {
    Icon = <img src={icon.external.url} alt="Emoji" />;
  }

  return <Container>{Icon}</Container>;
};

const ICON_SIZE = 18;

const Container = styled.div`
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;

  display: inline-block;
  vertical-align: text-top;

  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;

    display: block;

    object-fit: cover;
  }
`;
