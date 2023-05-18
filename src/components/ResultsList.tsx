import { Button, Chip, Stack, SxProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import { shape } from "../styles/shape";
import { display } from "../store/features/modalMovieDetailSlice";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { PosterPlaceholder } from "./PosterPlaceholder";

export function ResultsList() {
  const { pageResults, errorMessage } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();
  const noResult = pageResults.length === 0;

  const list = pageResults.map((movie) => {
    const handleClick = () => dispatch(display(movie.imdbID));

    return (
      <Button key={movie.imdbID} sx={style_searchResults} onClick={handleClick}>
        <Poster movie={movie} />

        <Stack sx={style_resultData}>
          <Typography>{movie.Title}</Typography>
          <Typography>{movie.Year}</Typography>
          <Chip label={movie.Type} size="small" />
        </Stack>
      </Button>
    );
  });

  const ErrorMessage = <Typography>{errorMessage}</Typography>;

  return <Stack sx={style_container}>{noResult ? ErrorMessage : list}</Stack>;
}

function Poster({ movie }: { movie: MovieSearchResult }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const alt = `poster of the movie ${movie.Title}`;
  const posterProvided = movie.Poster !== "N/A";

  if (posterProvided) {
    return <img src={movie.Poster} alt={alt} style={style_picture(isSmallScreen)} />;
  } else {
    return <PosterPlaceholder sx={style_picture(isSmallScreen)} />;
  }
}

const style_container: SxProps = {
  alignItems: "center",
  gap: 2,

  width: "100%",
};

const style_searchResults: SxProps = {
  ...shape.borderedContainer,

  flexFlow: { xs: "column nowrap", sm: "row nowrap" },
  alignItems: "center",
  gap: 2,

  width: "100%",
  maxWidth: shape.searchBarMaxWidth,
  padding: { xs: 2, sm: 1.3 },

  ":hover": {
    borderWidth: shape.borderedContainer.borderWidth,
    borderColor: "primary.main",
  },
};

const style_resultData: SxProps = {
  alignItems: { xs: "center", sm: "start" },
  gap: 1.2,
  width: "100%",

  textAlign: { xs: "center", sm: "start" },
};

const style_picture = (isSmallScreen: boolean) => {
  const size = isSmallScreen ? "150px" : "110px";

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: size,
    maxWidth: isSmallScreen ? "none" : "90px",
    height: size,
    borderRadius: shape.borderRadius,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "grey",
    backgroundColor: "background.border",
  };
};
