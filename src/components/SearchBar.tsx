import { SxProps, TextField } from "@mui/material";
import { shape } from "../styles/shape";
import { useAppDispatch, useAppSelector } from "../store/reduxHooks";
import { ChangeEvent } from "react";
import { updateTitle } from "../store/features/movieSearch/movieSearchSlice";

export function SearchBar() {
  const { title } = useAppSelector((state) => state.movieSearch);
  const dispatch = useAppDispatch();

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => dispatch(updateTitle(event.target.value));

  return (
    <TextField
      label="Find a movie with its title..."
      value={title}
      onChange={onInputChange}
      placeholder="Type a movie title"
      sx={style_textfield}
    />
  );
}

const style_textfield: SxProps = {
  width: "100%",
  maxWidth: shape.searchBarMaxWidth,
  marginBottom: 6,
};
