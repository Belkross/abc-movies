import { CardMedia, SxProps } from "@mui/material";
import { useAppSelector } from "../store/reduxHooks";
import { shape } from "../styles/shape";
import { PosterPlaceholder } from "./PosterPlaceholder";

export function CardIllustration({ posterProvided }: { posterProvided: boolean }) {
  const { Title, Poster } = useAppSelector((state) => state.modalMovieDetail.movie);
  const alt = posterProvided ? `poster of the movie ${Title}` : "";

  if (posterProvided) {
    return <CardMedia component="img" src={Poster} alt={alt} sx={style_poster} />;
  } else {
    return <PosterPlaceholder sx={style_posterPlaceholder} />;
  }
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
