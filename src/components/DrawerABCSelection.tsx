import { Drawer, Stack, SxProps, Typography } from "@mui/material";
import { LocalStorageMoviePickRepo } from "../MoviePicker/LocalStorageMoviePickRepo";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ALPHABET } from "../constants";
import { shape } from "../styles/shape";
import { ButtonCloseElement } from "./ButtonCloseElement";

const PickedMoviesStorage = new LocalStorageMoviePickRepo();

type Props = {
  displayed: boolean;
  closeDrawer: FlowlessFunction;
};

export function DrawerABCSelection({ displayed, closeDrawer }: Props) {
  const [titles, setTitles] = useState<Array<string>>([]);

  useUpdateABCSelection(displayed, setTitles);

  const moviePickedList = [...ALPHABET].map((letter, index) => {
    const content = `${letter.toUpperCase()} - ${titles[index]}`;
    return <Typography key={index}>{content}</Typography>;
  });

  return (
    <Drawer variant="temporary" anchor="right" open={displayed} onClose={closeDrawer} PaperProps={{ sx: style_paper }}>
      <Stack sx={style_header}>
        <ButtonCloseElement onClick={() => closeDrawer()} sx={style_buttonClose} />
        <Typography variant="h2">Movie selection</Typography>
      </Stack>

      {moviePickedList}
    </Drawer>
  );
}

const style_paper: SxProps = {
  gap: 0.5,
  width: "100%",
  height: "100%",
  maxWidth: { xs: "none", sm: "500px" },
  backgroundImage: "none",

  ...shape.borderedContainer,
};

const style_header: SxProps = {
  flexFlow: "row-reverse nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 2,
  marginBottom: 3,
};

const style_buttonClose: SxProps = {
  alignSelf: "end",
};

function useUpdateABCSelection(drawerDisplayed: boolean, setTitles: Dispatch<SetStateAction<Array<string>>>) {
  useEffect(() => {
    const getSelectionedMovies = async () => {
      if (drawerDisplayed) {
        const titles = await PickedMoviesStorage.getAll();
        setTitles(titles);
      }
    };

    getSelectionedMovies();
  }, [drawerDisplayed, setTitles]);
}
