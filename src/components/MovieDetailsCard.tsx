import { Card, CardActions, CardContent, CardHeader, Chip, SxProps, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { ButtonCloseElement } from "./ButtonCloseElement";
import { remove } from "../store/features/modalMovieDetailSlice";
import { ButtonPickMovie } from "./ButtonPickMovie";
import { CardIllustration } from "./CardIllustration";

export function MovieDetailsCard() {
  const { movie, status, errorMessage } = useAppSelector((state) => state.modalMovieDetail);
  const { Title, Year, Type, Poster, Plot, Actors } = movie;
  const dispatch = useAppDispatch();
  const posterProvided = Poster !== "N/A";
  const fetchFailed = status === "failed";

  if (fetchFailed) {
    return <Typography>Error: {errorMessage}</Typography>;
  } else {
    return (
      <Card sx={style_container}>
        <CardHeader action={<ButtonCloseElement onClick={() => dispatch(remove())} />} title={Title} subheader={Year} />
        <CardIllustration posterProvided={posterProvided} />
        <CardContent sx={style_content}>
          <Typography>
            <Typography component="span" sx={style_partTitle}>
              Plot:{" "}
            </Typography>
            {Plot}
          </Typography>
          <Typography>
            <Typography component="span" sx={style_partTitle}>
              Actors:{" "}
            </Typography>
            {Actors}
          </Typography>
          <Chip label={Type} />
        </CardContent>
        <CardActions disableSpacing>
          <ButtonPickMovie Title={Title} />
        </CardActions>
      </Card>
    );
  }
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

const style_partTitle: SxProps = {
  color: "text.noticeable",
};
