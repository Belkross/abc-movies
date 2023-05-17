import { Button, SxProps } from "@mui/material";
import { LocalStorageMoviePickRepo } from "../MoviePicker/LocalStorageMoviePickRepo";
import { MoviePicker } from "../MoviePicker/MoviePicker";
import { useState } from "react";

const moviePicker = new MoviePicker(new LocalStorageMoviePickRepo());

type Props = {
  Title: string;
};

export function ButtonPickMovie({ Title }: Props) {
  const firstCharacter = Title.charAt(0);
  const [disabled, setDisabled] = useState(checkIfLetterFulfilled(firstCharacter));

  const handleClick = async () => {
    await moviePicker.pick(Title);
    setDisabled(checkIfLetterFulfilled(firstCharacter));
  };

  return (
    <Button onClick={handleClick} disabled={disabled} sx={style_button}>
      {disabled ? `Character ${firstCharacter.toUpperCase()} fulfilled` : "Add to selection"}
    </Button>
  );
}

const style_button: SxProps = {
  backgroundColor: "secondary.main",
  borderColor: "secondary.main",
};

function checkIfLetterFulfilled(firstCharacter: string): boolean {
  const firstCharacterIsALetter = /^[a-z]$/i.test(firstCharacter);
  if (!firstCharacterIsALetter) return true;

  const uppercasedLetter = firstCharacter.toUpperCase();
  const regExp = new RegExp(`^${uppercasedLetter}`, "i");
  const storedValue = window.localStorage.getItem(uppercasedLetter);

  return storedValue !== null && regExp.test(storedValue);
}
