import { PaletteColor } from "@mui/material/styles/createPalette";

interface SitePaletteColorTheme {
  Primary: PaletteColor;
  Secondary: PaletteColor;
  Error: PaletteColor;
  Success: PaletteColor;
  Warning: PaletteColor;
  Info: PaletteColor;
}

export const SitePaletteColors: SitePaletteColorTheme = {
  Primary: {
    light: "#4ab298",
    dark: "#00543f",
    main: "#00826a",
    contrastText: "#ffffff",
  },
  Secondary: {
    light: "#db6d39",
    dark: "#6f0d00",
    main: "#a43f0c",
    contrastText: "#ffffff",
  },
  Error: {
    light: "#ff503a",
    dark: "#950000",
    main: "#cf000f",
    contrastText: "",
  },
  Success: {
    light: "#51cb70",
    dark: "#006917",
    main: "#009943",
    contrastText: "",
  },
  Warning: {
    light: "#ff864c",
    dark: "#b61c00",
    main: "#f0541e",
    contrastText: "",
  },
  Info: {
    light: "#98f3ff",
    dark: "#2690ad",
    main: "#63c0df",
    contrastText: "",
  },
};
