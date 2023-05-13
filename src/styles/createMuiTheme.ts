import { createTheme, responsiveFontSizes } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { createMuiComponents } from "./components";
import { palette } from "./palette";
import { shape } from "./shape";
import { typography } from "./typography";
import { ThemeMode } from "../types/globals";

export function createMuiTheme(mode: ThemeMode) {
  const theme = createTheme({
    breakpoints: { values: { ...breakpoints } },
    palette: { mode, ...palette[mode] },
    typography,
    shape,
  });

  return createTheme(responsiveFontSizes(theme), createMuiComponents(theme));
}
