import { ReactElement } from "react";
import { ProviderMuiTheming } from "./ProviderMuiTheming";

type Props = {
  children: ReactElement;
};

export function GlobalFeatures({ children }: Props) {
  return <ProviderMuiTheming>{children}</ProviderMuiTheming>;
}
