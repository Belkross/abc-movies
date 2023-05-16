import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  SxProps,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { ButtonCloseElement } from "./ButtonCloseElement";
import { remove } from "../store/features/modalMovieDetailSlice";
import { shape } from "../styles/shape";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

export function MovieDetailsCard() {
  const { Title, Year, Type, Poster, Plot, Actors } = useAppSelector((state) => state.modalMovieDetail.movie);
  const dispatch = useAppDispatch();
  const posterAvailable = Poster !== "N/A";
  const alt = posterAvailable ? `poster of the movie ${Title}` : "";

  return (
    <Card sx={style_container}>
      <CardHeader action={<ButtonCloseElement onClick={() => dispatch(remove())} />} title={Title} subheader={Year} />
      {posterAvailable ? (
        <CardMedia component="img" src={Poster} alt={alt} sx={style_poster} />
      ) : (
        <Box sx={style_posterPlaceholder}>
          <NoPhotographyIcon />
        </Box>
      )}
      <CardContent sx={style_content}>
        <Typography>Plot: {Plot}</Typography>
        <Typography>Actors: {Actors}</Typography>
        <Chip label={Type} />
      </CardContent>
      <CardActions disableSpacing>
        <Button>Add to selection</Button>
      </CardActions>
    </Card>
  );
}

const style_container: SxProps = {
  width: "100%",
  height: "100%",
  padding: 2.5,
  overflowY: "auto",
};

const style_content: SxProps = {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "start",
  gap: 1,
};

const style_poster: SxProps = {
  maxWidth: "400px",
  margin: "auto",

  borderRadius: shape.borderRadius,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "grey",
};

const style_posterPlaceholder: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 200,
  height: 200,
  margin: "auto",

  borderRadius: shape.borderRadius,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "grey",
};