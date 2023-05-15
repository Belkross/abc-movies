import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Stack, IconButton, Typography, SxProps } from "@mui/material";
import { shape } from "../styles/shape";
import { getTotalPages } from "../helpers/getTotalPages";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { updatePage } from "../store/features/movieSearchSlice";

export function PageSelector() {
  const { totalResults, page } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();
  const totalPages = getTotalPages(totalResults);

  const handleNewPage = (newPage: number) => dispatch(updatePage(newPage));

  return (
    <Stack sx={style_container}>
      <IconButton aria-label="previous page" disabled={page <= 1} onClick={() => handleNewPage(page - 1)}>
        <ArrowLeft />
      </IconButton>
      <Typography>{`Page ${page}/${totalPages}`}</Typography>
      <IconButton aria-label="next page" disabled={page >= totalPages} onClick={() => handleNewPage(page + 1)}>
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
