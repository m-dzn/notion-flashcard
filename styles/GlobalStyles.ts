import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

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
  }
`;
