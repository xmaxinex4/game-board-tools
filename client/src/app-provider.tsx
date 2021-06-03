import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";

import { muiTheme } from "./theme";

export function AppProvider(props: { children: React.ReactNode; }): React.ReactElement {
  const { children } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Router>
        {children}
      </Router>
    </ThemeProvider>
  );
}
