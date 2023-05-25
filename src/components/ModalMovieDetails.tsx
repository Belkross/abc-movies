import { Dialog, SxProps, useMediaQuery, useTheme } from "@mui/material";
import { shape } from "../styles/shape";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { fetchMovie, remove } from "../store/features/modalMovieDetailSlice";
import { useEffect } from "react";
import { CircularProgressIndeterminate } from "./CircularProgressIndeterminate";
import { MovieDetailsCard } from "./MovieDetailsCard";

export function ModalMovieDetails() {
  const { displayed, displayedMovieId, status } = useAppSelector((state) => state.modalMovieDetail);
  const smallScreen = useMediaQuery(useTheme().breakpoints.down("md"));
  const isFetching = status === "pending";
  const dispatch = useAppDispatch();

  const handleClose = () => dispatch(remove());

  useEffect(() => {
    if (displayed) dispatch(fetchMovie(displayedMovieId));
  }, [displayed, dispatch, displayedMovieId]);

  return (
    <Dialog open={displayed} PaperProps={{ sx: style_paper }} onClose={handleClose} fullScreen={smallScreen}>
      {isFetching ? <CircularProgressIndeterminate /> : <MovieDetailsCard />}
    </Dialog>
  );
}

const style_paper: SxProps = {
  justifyContent: "center",
  alignItems: "center",

  ...shape.borderedContainer,
  padding: 0,

  width: "100%",
  maxWidth: "21cm",
  minWidth: "200px",
  minHeight: "300px",

  backgroundImage: "none",
};
