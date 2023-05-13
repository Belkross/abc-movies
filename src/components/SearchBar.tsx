import { SxProps, TextField } from "@mui/material";

export function SearchBar() {
  return (
    <TextField
      placeholder="Type the title of a movie..."
      sx={style_textfield}
    />
  );
}

const style_textfield: SxProps = {
  width: "100%",
  maxWidth: "700px",
};
