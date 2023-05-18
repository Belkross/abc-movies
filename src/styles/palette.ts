import { blue, lightGreen, orange } from "@mui/material/colors";

const smoothWhiteText = "rgba(255, 255, 255, .85)";
const smoothBlackText = "rgba(0, 0, 0, .85)";

const darkModePalette = {
  primary: { main: blue[700] },
  secondary: { main: lightGreen[800] },

  text: {
    primary: smoothWhiteText,
    opposite: smoothBlackText,
    noticeable: orange[500],
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
