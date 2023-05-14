import { Stack, SxProps, Typography } from "@mui/material";
import { PageSelector } from "./PageSelector";
import { ResultsList } from "./ResultsList";
import { shape } from "../styles/shape";
import { Dispatch, SetStateAction } from "react";

type Props = {
  movieSearch: MovieSearch;
  setMovieSearch: Dispatch<SetStateAction<MovieSearch>>;
};

export function SearchResults({ movieSearch, setMovieSearch }: Props) {
  const { pageResults, totalResults } = movieSearch;
  const someResultFound = pageResults.length > 0;

  return (
    <Stack sx={style_container}>
      {someResultFound && (
        <Typography>{`Click on a result to open details (found ${totalResults} ${
          totalResults > 1 ? "movies" : "movie"
        })`}</Typography>
      )}
      <ResultsList movieSearch={movieSearch} />
      {someResultFound && <PageSelector movieSearch={movieSearch} setMovieSearch={setMovieSearch} />}
    </Stack>
  );
}

const style_container: SxProps = {
  marginTop: 6,
  gap: shape.spacingBase,
  alignItems: "center",

  width: "100%",
};
