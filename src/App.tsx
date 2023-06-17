import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AccountProvider } from "./contexts/AccountContext";
import { SummaryProvider } from "./contexts/SummaryContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AccountProvider>
          <SummaryProvider>
            <Router />
          </SummaryProvider>
        </AccountProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}