import { Box, Stack, SxProps } from "@mui/material";
import { shape } from "../styles/shape";
import { Header } from "./Header";
import { ButtonABCSelection } from "./ButtonABCSelection";
import { SearchBar } from "./SearchBar";
import { ModalMovieDetails } from "./ModalMovieDetails";
import { DrawerABCSelection } from "./DrawerABCSelection";
import { SearchResults } from "./SearchResults";
import { useState, useEffect } from "react";
import { searchMovies } from "../api/searchMovies";

const initialMovieSearchState: MovieSearch = {
  title: "",
  page: 1,
  pageResults: [],
  totalResults: 0,
};

export function HomeInterface() {
  const [movieSearch, setMovieSearch] = useState(initialMovieSearchState);
  const { title, page } = movieSearch;

  useEffect((): FlowlessFunction => {
    let ignore = false;

    async function fetchMovies() {
      const { succeeded, payload } = await searchMovies(title, page);

      if (!ignore && succeeded) {
        if (payload.Response === "True") {
          setMovieSearch((prevState) => ({
            ...prevState,
            pageResults: payload.Search,
            totalResults: Number.parseInt(payload.totalResults, 10),
          }));
        } else {
          setMovieSearch((prevState) => ({
            ...prevState,
            pageResults: [],
            totalResults: 0,
          }));
        }
      }
    }

    fetchMovies();

    return () => (ignore = true);
  }, [title, page]);

  return (
    <>
      <Box component="main" sx={style_container}>
        <Header />
        <ButtonABCSelection />
        <Stack sx={style_searchFeature}>
          <SearchBar movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
          <SearchResults movieSearch={movieSearch} setMovieSearch={setMovieSearch} />
        </Stack>
      </Box>

      <ModalMovieDetails />
      <DrawerABCSelection />
    </>
  );
}

const style_container: SxProps = {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  gap: 4,

  padding: shape.spacingBase,
};

const style_searchFeature: SxProps = {
  alignItems: "center",
  width: "100%",
  marginTop: 6,
};
