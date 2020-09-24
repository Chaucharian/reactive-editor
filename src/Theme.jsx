import React, { useState } from "react";
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#000",
      light: "#808080",
    },
    type: "dark",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          overflow: "hidden",
        },
      },
    },
  },
});

const Theme = ({ children, ...props }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeDark = () => {
    theme.palette.type = theme.palette.type === "light" ? "dark" : "light";
    const newTheme = { ...theme };
    setTheme({ ...newTheme });
  };

  return (
    <MaterialThemeProvider theme={{ ...theme, changeDark }} {...props}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};

export default Theme;
