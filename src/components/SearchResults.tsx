import { Stack, SxProps, Typography } from "@mui/material";
import { PageSelector } from "./PageSelector";
import { ResultsList } from "./ResultsList";
import { shape } from "../styles/shape";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { CircularProgressIndeterminate } from "./CircularProgressIndeterminate";
import { useEffect } from "react";
import { fetchMovies } from "../store/features/movieSearchSlice";

export function SearchResults() {
  const { pageResults, totalResults, status, title, page } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();
  const someResultFound = pageResults.length > 0;
  const loading = status === "pending";
  const resultFoundText = `Click on a result to open details (found ${totalResults} ${
    totalResults > 1 ? "movies" : "movie"
  })`;

  useEffect(() => {
    if (title) {
      dispatch(fetchMovies({ title, page }));
    }
  }, [dispatch, title, page]);

  return loading ? (
    <CircularProgressIndeterminate />
  ) : (
    <Stack sx={style_container}>
      {someResultFound && <Typography>{resultFoundText}</Typography>}
      <ResultsList />
      {someResultFound && <PageSelector />}
    </Stack>
  );
}

const style_container: SxProps = {
  gap: shape.spacingBase,
  alignItems: "center",

  width: "100%",
};
