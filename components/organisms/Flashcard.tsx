import React from "react";
import styled from "styled-components";

import {
  Avatar,
  Badge,
  Checkbox,
  Field,
  Files,
  RichText,
  Rollup,
} from "@/components/atoms";
import { ICON } from "@/constants";
import { addHttp } from "@/lib";
import { mapPropToJSX, RenderTable } from "@/lib/notion";
import { customScrollbar, ellipsis, TOKEN } from "@/styles";

interface Props {
  card: any;
  properties: { title: string; header?: string[]; body?: string[] };
  onClickComplete?: (cardId: string) => void;
}

export const Flashcard = ({
  card: { id, url, properties: props },
  properties: { title, header, body },
  onClickComplete,
}: Props) => {
  return (
    <Card>
      <Header>
        <a href={url} target="_blank" rel="noreferrer">
          {mapPropToJSX(props[title], renderTable)}
        </a>
        {header?.map((propName) => mapPropToJSX(props[propName], renderTable))}
        <RightTopMenu>
          <CompleteButton
            onClick={() => onClickComplete && onClickComplete(id)}
          >
            ✅
          </CompleteButton>
        </RightTopMenu>
      </Header>
      <Body>
        <InnerBody>
          {body?.map((propName) => {
            if (!props[propName]) return null;
            const type: keyof typeof ICON = props[propName].type;

            let icon;
            if (type in ICON) {
              icon = ICON[type];
            }

            return (
              <Field key={props[propName].id} icon={icon} label={propName}>
                {mapPropToJSX(props[propName], renderTable)}
              </Field>
            );
          })}
        </InnerBody>
      </Body>
    </Card>
  );
};

const renderTable: RenderTable = {
  title: ({ data, id }) => <Title key={id}>{data}</Title>,
  rich_text: ({ data, id }) => <RichText key={id}>{data}</RichText>,
  select: ({ data, id }) => <Badge key={id} item={data} />,
  multi_select: ({ data, id }) => (
    <MultiSelect key={id}>
      {data.map((item) => item && <Badge key={item.id} item={item} />)}
    </MultiSelect>
  ),
  date: ({ data, id }) => (
    <Date key={id}>
      {data?.start}
      <span>{data?.end ? ` → ${data.end}` : ""}</span>
    </Date>
  ),
  people: ({ data, id }) => (
    <People key={id}>
      {data.map((item) => (
        <Avatar key={item.id} avatarUrl={item.avatar_url} name={item.name} />
      ))}
    </People>
  ),
  files: ({ data, id }) => <Files key={id} prop={data} />,
  checkbox: ({ data, id }) => <Checkbox key={id} checked={data} />,
  url: ({ data, id }) => (
    <a
      key={id}
      href={data ? addHttp(data) : ""}
      target="_blank"
      rel="noreferrer"
    >
      {data}
    </a>
  ),
  email: ({ data, id }) => <RichText key={id}>{data}</RichText>,
  phone_number: ({ data, id }) => <RichText key={id}>{data}</RichText>,
  rollup: ({ data, id }) => <Rollup key={id} prop={data} />,
};

const HEADER_HEIGHT = 144;
const HEADER_PADDING_V = 32;
const HEADER_PADDING_H = 32;
const HEADER_ROW_GAP = 8;

const HEADER_MENU_SIZE = 24;

const BODY_PADDING_V = 20;
const BODY_PADDING_H = 12;

const Card = styled.article`
  width: 100%;
  aspect-ratio: 1 / 1.4;

  border: 1px solid ${({ theme }) => theme.font};
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const Header = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: ${HEADER_PADDING_V}px ${HEADER_PADDING_H}px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${HEADER_ROW_GAP}px;

  color: ${({ theme }) => theme.subFont};

  transition: background 0.18s ease-out;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
`;

const Body = styled.div`
  padding: ${BODY_PADDING_V}px ${BODY_PADDING_H}px;

  flex: 1;
  display: flex;
  overflow: hidden;
`;

const InnerBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${customScrollbar()};
`;

const RightTopMenu = styled.div`
  width: ${HEADER_MENU_SIZE}px;
  height: ${HEADER_MENU_SIZE}px;

  position: absolute;
  top: ${HEADER_PADDING_V - HEADER_MENU_SIZE}px;
  right: ${HEADER_PADDING_H - HEADER_MENU_SIZE}px;

  display: flex;
  overflow: hidden;

  div {
    width: ${HEADER_MENU_SIZE}px;
    height: ${HEADER_MENU_SIZE}px;
    font-size: 15px;

    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h4`
  margin: 0;
  text-align: center;

  ${ellipsis(2)}
`;

const MultiSelect = styled.div`
  display: flex;
  gap: 6px;
`;

const Date = styled.div`
  font-size: ${TOKEN.FONT_SIZE.SMALL}px;
`;

const People = styled.div`
  display: flex;
  gap: 8px;
`;

const CompleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  cursor: pointer;
`;
