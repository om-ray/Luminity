import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#141415",
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.7)",
    },
    disabled: {
      main: "rgba(255, 255, 255, 0.5)",
    },
    typography: {
      body2: {
        fontFamily: "Megrim",
      },
    },
  },
});

export default theme;
