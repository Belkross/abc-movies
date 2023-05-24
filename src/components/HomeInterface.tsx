import { Stack, SxProps } from "@mui/material";
import { shape } from "../styles/shape";
import { Header } from "./Header";
import { ButtonABCSelection } from "./ButtonABCSelection";
import { SearchBar } from "./SearchBar";
import { ModalMovieDetails } from "./ModalMovieDetails";
import { DrawerABCSelection } from "./DrawerABCSelection";
import { SearchResults } from "./SearchResults";
import { useTemporaryElement } from "../hooks/useTemporaryElement";

export function HomeInterface() {
  const drawer = useTemporaryElement(false);

  return (
    <>
      <Stack component="main" sx={style_container}>
        <Stack sx={style_headerContainer}>
          <Header />
          <ButtonABCSelection onClick={drawer.display} />
        </Stack>

        <Stack sx={style_searchFeature}>
          <SearchBar />
          <SearchResults />
        </Stack>
      </Stack>

      <ModalMovieDetails />
      <DrawerABCSelection displayed={drawer.displayed} closeDrawer={drawer.remove} />
    </>
  );
}

const style_container: SxProps = {
  alignItems: "center",
  gap: 3,

  padding: shape.spacingBase,
};

const style_headerContainer: SxProps = {
  flexFlow: { xs: "column nowrap", md: "row nowrap" },
  alignItems: "center",
  gap: { xs: 3, md: 5 },
};

const style_searchFeature: SxProps = {
  alignItems: "center",
  width: "100%",
  marginTop: 6,
};
