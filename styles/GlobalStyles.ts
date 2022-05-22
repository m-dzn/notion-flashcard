import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { TOKEN } from "@/styles/tokens";

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
    margin: 0;

    color: ${({ theme }) => theme.font};
    font-family: ${TOKEN.FONT_FAMILY};
    line-height: ${TOKEN.LINE_HEIGHT.DEFAULT};
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
