import { ReactNode } from "react";
import { ProviderMuiTheming } from "./ProviderMuiTheming";
import { Provider } from "react-redux";
import { store } from "../store";

type Props = {
  children: ReactNode;
};

export function GlobalFeatures({ children }: Props) {
  return (
    <Provider store={store}>
      <ProviderMuiTheming>{children}</ProviderMuiTheming>
    </Provider>
  );
}
