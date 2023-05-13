import { Stack, SxProps, Typography } from "@mui/material";

export function Header() {
  return (
    <Stack component="header" sx={style_container}>
      <Typography variant="h1">ABC Movies</Typography>
      <Typography>Create your own alphabetical movie selection</Typography>
    </Stack>
  );
}

const style_container: SxProps = {
  textAlign: "center",
  alignItems: "center",
};
