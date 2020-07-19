import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: "Avenir",
    fontSize: 15,
    color: "#e6e6e6",
  },
  palette: {
    type: "dark",
    background: {
      default: "#141415",
    },
    primary: {
      main: "#e6e6e6",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.7)",
    },
    disabled: {
      main: "rgba(255, 255, 255, 0.5)",
    },
  },
});

export default theme;
