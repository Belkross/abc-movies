import { Box, Stack, SxProps } from "@mui/material";
import { shape } from "../styles/shape";
import { Header } from "./Header";
import { ButtonABCSelection } from "./ButtonABCSelection";
import { SearchBar } from "./SearchBar";
import { ModalMovieDetails } from "./ModalMovieDetails";
import { DrawerABCSelection } from "./DrawerABCSelection";
import { SearchResults } from "./SearchResults";
import { useAppSelector } from "../store/reduxHooks";

export function HomeInterface() {
  const modalState = useAppSelector((state) => state.modalMovieDetail);

  return (
    <>
      <Box component="main" sx={style_container}>
        <Header />
        <ButtonABCSelection />
        <Stack sx={style_searchFeature}>
          <SearchBar />
          <SearchResults />
        </Stack>
      </Box>

      {modalState.displayed && <ModalMovieDetails />}
      <DrawerABCSelection />
    </>
  );
}

const style_container: SxProps = {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  gap: 4,

  padding: shape.spacingBase,
};

const style_searchFeature: SxProps = {
  alignItems: "center",
  width: "100%",
  marginTop: 6,
};
