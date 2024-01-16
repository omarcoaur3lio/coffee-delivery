import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
// import { Button } from "./Button";
// import { useState } from "react";
// import { Dark } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";

export function App() {
  // const [dark, setDark] = useState(false)

  return (
    // <ThemeProvider theme={dark ? Dark : defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
      <BrowserRouter>
        <Router />
        {/* <Button /> */}
        {/* <button onClick={() => setDark(!dark)}>{!dark ? "Dark" : "Light"}</button> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}
