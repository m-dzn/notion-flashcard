import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { TOKEN } from "./tokens";

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: ${TOKEN.FONT_FAMILY};
    margin: 0;
    color: ${({ theme }) => theme.font};
  }

  a {
  text-decoration: none;

  &, &:active, &:focus, &:hover, &:visited {
    color: ${({ theme }) => theme.font};
  }

  h4 {
    font-size: ${TOKEN.FONT_SIZE.H4}px;
  }

  h5 {
    font-size: ${TOKEN.FONT_SIZE.H5}px;
  }
}`;
