import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { Badge } from "@/components/atoms";
import { FilterButton, filterSelector } from "@/lib";
import { PropertyFilter } from "@/lib/notion";

interface Props {
  title?: string;
  filterMenu: FilterButton[];
  getFilter: (value: string) => PropertyFilter;
}

export const FilterMenu = ({ title, filterMenu, getFilter }: Props) => {
  const setFilter = useSetRecoilState(filterSelector);

  return (
    <Container>
      <Headline>
        <h5>{title || "Filter"}</h5>
      </Headline>
      <Body>
        <Badge
          item={{ name: "All", color: "default" }}
          onClick={() => setFilter(getFilter(""))}
        />
        {filterMenu?.map((button) => (
          <Badge
            key={button.id}
            item={button}
            onClick={() => setFilter(getFilter(button.name))}
          />
        ))}
      </Body>
    </Container>
  );
};

const HEIGHT = 24;
const HEADLINE_GAP = 16;

const COLUMN_GAP = 16;
const ROW_GAP = 4;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${HEADLINE_GAP}px;
`;

const Headline = styled.div`
  width: 64px;
  flex-shrink: 0;

  h5 {
    margin: 0;
    line-height: ${HEIGHT}px;
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: ${HEIGHT}px;

  display: flex;
  flex-wrap: wrap;
  column-gap: ${COLUMN_GAP}px;
  row-gap: ${ROW_GAP}px;

  & > * {
    margin: ${(HEIGHT - 18) / 2}px 0;
  }
`;
