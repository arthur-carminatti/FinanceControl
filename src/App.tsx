import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AccountProvider } from "./contexts/AccountContext";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AccountProvider>
          <TransactionsProvider>
            <Router />
          </TransactionsProvider>
        </AccountProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}