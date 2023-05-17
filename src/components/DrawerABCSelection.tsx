import { Drawer, SxProps, Typography } from "@mui/material";
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
      <ButtonCloseElement onClick={() => closeDrawer()} sx={style_buttonClose} />
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
