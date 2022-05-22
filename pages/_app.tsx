import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

import { defaultTheme, GlobalStyles } from "@/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
