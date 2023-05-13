import { Stack, SxProps, Typography } from "@mui/material";
import { PageSelector } from "./PageSelector";
import { ResultsList } from "./ResultsList";

export function SearchResults() {
  return (
    <Stack sx={style_container}>
      <Typography>Click on a result to open details</Typography>
      <ResultsList />
      <PageSelector />
    </Stack>
  );
}

const style_container: SxProps = {
  marginTop: 6,
};
