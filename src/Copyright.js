import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    body2: {
      fontFamily: "Avenir",
      fontWeight: 500,
    },
  },
});

export default function Copyright() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="https://material-ui.com/">
          Luminity
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </ThemeProvider>
  );
}
