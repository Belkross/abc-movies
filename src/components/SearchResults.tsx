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
  const { pageResults, totalResults, status, title, page } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();
  const someResultFound = pageResults.length > 0;
  const loading = status === "pending";
  const resultFoundText = `Click on a result to open details - found ${totalResults} ${
    totalResults > 1 ? "movies" : "movie"
  }`;

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

  if (loading) {
    return <CircularProgressIndeterminate />;
  } else {
    return (
      <Stack sx={style_container}>
        {someResultFound && <Typography>{resultFoundText}</Typography>}
        <ResultsList />
        {someResultFound && <PageSelector />}
      </Stack>
    );
  }
}

const style_container: SxProps = {
  gap: shape.spacingBase,
  alignItems: "center",

  width: "100%",
};
