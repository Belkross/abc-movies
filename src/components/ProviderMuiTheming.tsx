import { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createMuiTheme } from "../styles/createMuiTheme";

type Props = {
  children: ReactNode;
};

export function ProviderMuiTheming({ children }: Props) {
  const muiTheme = createMuiTheme("dark");

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
