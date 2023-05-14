import { SxProps, TextField } from "@mui/material";
import { ChangeEvent, SetStateAction, Dispatch } from "react";
import { shape } from "../styles/shape";

type Props = {
  movieSearch: MovieSearch;
  setMovieSearch: Dispatch<SetStateAction<MovieSearch>>;
};

export function SearchBar({ movieSearch, setMovieSearch }: Props) {
  const { title } = movieSearch;

  const onInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMovieSearch((prevState) => ({ ...prevState, title: value, page: 1 }));
  };

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
};
