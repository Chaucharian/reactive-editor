import React from "react";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    background: {
      default: "#000",
    },
  },
});

const Theme = ({ children, ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    <CssBaseline>{children}</CssBaseline>
  </ThemeProvider>
);

export default Theme;
