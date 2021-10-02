import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import { muiTheme } from "./theme";

export function AppProvider(props: { children: React.ReactNode; }): React.ReactElement {
  const { children } = props;
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <Router>
          {children}
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
