import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { useTheme } from "./styles/themes/Themes";
import Routes from "./routes";

const App: React.FC = () => {
  const {themes} = useTheme();

  return (
    <ThemeProvider theme={themes} >
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
