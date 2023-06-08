import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}