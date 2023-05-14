import { Button, Chip, Stack, SxProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import { shape } from "../styles/shape";

type Props = {
  movieSearch: MovieSearch;
};

export function ResultsList({ movieSearch }: Props) {
  const { pageResults } = movieSearch;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const list = pageResults.map((movie) => {
    const alt = `poster of the movie ${movie.Title}`;

    return (
      <Button key={movie.imdbID} sx={style_searchResults}>
        <img src={movie.Poster} alt={alt} style={style_picture(isSmallScreen)} />

        <Stack sx={style_resultData}>
          <Typography>{movie.Title}</Typography>
          <Typography>{movie.Year}</Typography>
          <Typography>id: {movie.imdbID}</Typography>

          <Chip label={movie.Type} size="small" />
        </Stack>
      </Button>
    );
  });

  const result = pageResults.length === 0 ? <Typography>No movie found...</Typography> : <>{list}</>;

  return <Stack sx={style_container}>{result}</Stack>;
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
    borderColor: "secondary.main",
  },
};

const style_resultData: SxProps = {
  alignItems: { xs: "center", sm: "start" },
  gap: 0.5,
  width: "100%",

  textAlign: { xs: "center", sm: "start" },
};

const style_picture = (isSmallScreen: boolean) => {
  const size = isSmallScreen ? "150px" : "150px";

  return {
    width: size,
    height: size,
    borderRadius: shape.borderRadius,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "grey",
  };
};
