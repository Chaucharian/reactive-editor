import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
    },
    type: "dark",
  },
});

const Theme = ({ children, ...props }) => (
  <MaterialThemeProvider theme={theme} {...props}>
    <StyledThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </StyledThemeProvider>
  </MaterialThemeProvider>
);

export default Theme;
