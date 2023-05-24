import { Button, SxProps, Theme, useTheme } from "@mui/material";
import ListIcon from "@mui/icons-material/ListAlt";

type Props = {
  onClick: FlowlessFunction;
};

export function ButtonABCSelection({ onClick }: Props) {
  const theme = useTheme();

  return (
    <Button sx={style_button(theme)} startIcon={<ListIcon />} onClick={() => onClick()}>
      Open my selection
    </Button>
  );
}

function style_button(theme: Theme): SxProps {
  return {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  };
}
