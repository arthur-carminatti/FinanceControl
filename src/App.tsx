import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AccountProvider } from "./contexts/AccountContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AccountProvider>
          <Router />
        </AccountProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}