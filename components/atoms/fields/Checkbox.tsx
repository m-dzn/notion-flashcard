import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { IMAGE } from "@/constants";

interface Props {
  checked?: boolean;
}

export const Checkbox = ({ checked }: Props) => {
  const src = checked ? IMAGE.checkbox.checked : IMAGE.checkbox.unchecked;

  const checkboxSize = checked ? CHECKED_SIZE : UNCHECKED_SIZE;

  return (
    <Container>
      <Background checked={!!checked}>
        <Temp>
          <Image
            src={src}
            alt="checkbox-input"
            width={checkboxSize}
            height={checkboxSize}
          />
        </Temp>
      </Background>
    </Container>
  );
};

const CHECKBOX_SIZE = 16;

const CHECKED_SIZE = 10;
const UNCHECKED_SIZE = CHECKBOX_SIZE;

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

const Background = styled.div<{ checked: boolean }>`
  ${({ checked }) => checked && "background: #2eaadc;"}

  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;

  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Temp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
