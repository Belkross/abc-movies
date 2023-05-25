import { Stack, SxProps, Typography } from "@mui/material";
import { PageSelector } from "./PageSelector";
import { ResultsList } from "./ResultsList";
import { shape } from "../styles/shape";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { CircularProgressIndeterminate } from "./CircularProgressIndeterminate";
import { useEffect } from "react";
import { clearResults, fetchMovies } from "../store/features/movieSearch/movieSearchSlice";
import { TYPING_WINDOW } from "../constants";

export function SearchResults() {
  const { status, title, page } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();
  const isFetching = status === "pending";

  //fetch the the movies with debouncing to avoid firing a request for each character typed from the user
  useEffect(() => {
    let fetchData: NodeJS.Timeout;

    if (title.length > 0) {
      fetchData = setTimeout(() => {
        dispatch(fetchMovies({ title, page }));
      }, TYPING_WINDOW);
    } else {
      dispatch(clearResults());
    }

    return () => clearTimeout(fetchData);
  }, [dispatch, title, page]);

  if (isFetching) return <CircularProgressIndeterminate />;
  else return <Results />;
}

function Results() {
  const { pageResults, totalResults, errorMessage, status } = useAppSelector((state) => state.movieSearch);
  const fetchFailed = status === "failed";
  const noResults = pageResults.length <= 0;
  const resultFoundText = `Click on a result to open details - found ${totalResults} ${
    totalResults > 1 ? "movies" : "movie"
  }`;

  if (fetchFailed) return <Typography>{errorMessage}</Typography>;
  else if (noResults) return null;
  else
    return (
      <Stack sx={style_container}>
        <Typography>{resultFoundText}</Typography>
        <ResultsList />
        <PageSelector />
      </Stack>
    );
}

const style_container: SxProps = {
  gap: shape.spacingBase,
  alignItems: "center",

  width: "100%",
};
