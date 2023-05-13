import { red } from "@mui/material/colors";

const smoothWhiteText = "rgba(255, 255, 255, .85)";
const smoothBlackText = "rgba(0, 0, 0, .85)";

const darkModePalette = {
  primary: { main: "#1056A5" },
  secondary: { main: red[700] },

  text: {
    primary: smoothWhiteText,
    opposite: smoothBlackText,
  },
  background: {
    default: "#0a1929",
    paper: "#0c2744",
    border: "#244d77",
  },
};

const lightModePalette = {
  ...darkModePalette,
};

export const palette = {
  dark: darkModePalette,
  light: lightModePalette,
};
