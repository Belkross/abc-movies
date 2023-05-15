import { IconButton, SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Clear";

type Props = {
  onClick: FlowlessFunction;
  sx?: SxProps;
};

export function ButtonCloseElement({ onClick, sx }: Props) {
  const style = { ...style_buttonClose, ...sx };

  return (
    <IconButton aria-label="Fermer" onClick={onClick} sx={style}>
      <CloseIcon />
    </IconButton>
  );
}

const style_buttonClose: SxProps = {
  backgroundColor: "error.main",
  borderColor: "error.main",
};
