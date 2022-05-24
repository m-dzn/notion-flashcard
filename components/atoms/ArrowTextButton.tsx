import React from "react";
import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const ArrowTextButton = ({ onClick, children }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled.button`
  background: none;
  outline: none;
  margin: 0;
  padding: 16px 32px;

  border: 1px solid ${({ theme }) => theme.font};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
`;
