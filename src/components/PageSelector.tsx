import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Stack, IconButton, Typography, SxProps } from "@mui/material";
import { shape } from "../styles/shape";
import { Dispatch, SetStateAction } from "react";
import { getTotalPages } from "../helpers/getTotalPages";

type Props = {
  movieSearch: MovieSearch;
  setMovieSearch: Dispatch<SetStateAction<MovieSearch>>;
};

export function PageSelector({ movieSearch, setMovieSearch }: Props) {
  const { totalResults, page } = movieSearch;
  const totalPages = getTotalPages(totalResults);

  const handleNewPage = (newPage: number) => {
    setMovieSearch((prevState) => ({
      ...prevState,
      page: newPage,
    }));
  };

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
