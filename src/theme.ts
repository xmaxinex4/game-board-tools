import { createTheme } from "@mui/material/styles";

import { SitePaletteColors } from "./theme/site-palettes";

// https://material-ui.com/customization/themes/
export const muiTheme = createTheme({
  palette: {
    primary: SitePaletteColors.Primary,
    secondary: SitePaletteColors.Secondary,
    error: SitePaletteColors.Error,
    success: SitePaletteColors.Success,
    info: SitePaletteColors.Info,
    warning: SitePaletteColors.Warning,
  },
  // typography: {
  // fontFamily: "\"Open Sans\", sans-serif",
  // h1: {
  // fontFamily: "\"Amatic SC\", cursive"
  // },
  // h2: {
  // fontFamily: "\"Amatic SC\", cursive"
  // },
  // h3: {
  // fontFamily: "\"Amatic SC\", cursive"
  // },
  // h4: {
  // fontFamily: "\"Amatic SC\", cursive"
  // },
  // h5: {
  // fontFamily: "\"Amatic SC\", cursive"
  // },
  // h6: {
  // fontFamily: "\"Amatic SC\", cursive"
  // }
  // },
});
