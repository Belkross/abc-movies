import { Box, SxProps } from "@mui/material";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

type Props = {
  sx?: SxProps;
};

export function PosterPlaceholder({ sx }: Props) {
  return (
    <Box sx={sx}>
      <NoPhotographyIcon />
    </Box>
  );
}
