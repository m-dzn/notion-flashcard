import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { Badge } from "@/components/atoms";
import { filterSelector } from "@/lib";
import { PropertyFilter } from "@/lib/notion";
import { FilterButton } from "@/types";

interface Props {
  title?: string;
  filterMenu: FilterButton[];
  getFilter: (value: string) => PropertyFilter;
}

export const FilterMenu = ({ title, filterMenu, getFilter }: Props) => {
  const setFilter = useSetRecoilState(filterSelector);

  return (
    <Container>
      <Headline>{title || "Filter"}</Headline>
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

const HEIGHT = 32;
const HEADLINE_GAP = 32;

const BUTTON_GAP = 16;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${HEADLINE_GAP}px;
`;

const Headline = styled.h5`
  margin: 0;
`;

const Body = styled.div`
  height: ${HEIGHT}px;

  display: flex;
  align-items: center;
  gap: ${BUTTON_GAP}px;
`;
