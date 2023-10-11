import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
// import { Button } from "./Button";
// import { useState } from "react";
// import { Dark } from "./styles/theme/dark";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

export function App() {
  // const [dark, setDark] = useState(false)

  return (
    // <ThemeProvider theme={dark ? Dark : defaultTheme}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
      {/* <Button /> */}
      {/* <button onClick={() => setDark(!dark)}>{!dark ? "Dark" : "Light"}</button> */}
    </ThemeProvider>
  );
}
