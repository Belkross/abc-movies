import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Stack, IconButton, Typography, SxProps } from "@mui/material";
import { shape } from "../styles/shape";

export function PageSelector() {
  return (
    <Stack sx={style_container}>
      <IconButton aria-label="previous page">
        <ArrowLeft />
      </IconButton>
      <Typography>Page 1/2000</Typography>
      <IconButton aria-label="next page">
        <ArrowRight />
      </IconButton>
    </Stack>
  );
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: shape.spacingBase,
  alignItems: "center",
};
