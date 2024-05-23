import { alpha, createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { appColors } from "../global.styles";


export const DarkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: alpha(appColors.green[1], 0.8),
      dark: appColors.green[1],
      light: alpha(appColors.green[1], 0.5),
      contrastText: "#fff",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#fff",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    }
  },
});