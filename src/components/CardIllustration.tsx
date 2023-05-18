import { CardMedia, Box, SxProps } from "@mui/material";
import { useAppSelector } from "../store/reduxHooks";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import { shape } from "../styles/shape";

export function CardIllustration({ posterAvailable }: { posterAvailable: boolean }) {
  const { Title, Poster } = useAppSelector((state) => state.modalMovieDetail.movie);
  const alt = posterAvailable ? `poster of the movie ${Title}` : "";

  const providedPoster = <CardMedia component="img" src={Poster} alt={alt} sx={style_poster} />;
  const placeHolder = (
    <Box sx={style_posterPlaceholder}>
      <NoPhotographyIcon />
    </Box>
  );

  return posterAvailable ? providedPoster : placeHolder;
}

const style_poster: SxProps = {
  maxWidth: "400px",
  margin: "auto",

  borderRadius: shape.borderRadius,
  border: "1px solid grey",
};

const style_posterPlaceholder: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  maxWidth: 600,
  height: 200,
  margin: "auto",

  borderRadius: shape.borderRadius,
  border: "1px solid grey",
  backgroundColor: "background.border",
};
