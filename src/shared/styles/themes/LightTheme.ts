import { alpha, createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

import { appColors } from "../global.styles";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: appColors.green[2],
      dark: alpha(appColors.green[2], 0.8),
      light: alpha(appColors.green[2], 0.5),
      contrastText: "#fff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#f7f6f3",
    }
  },  
});