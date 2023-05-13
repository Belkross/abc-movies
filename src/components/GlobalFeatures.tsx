import { ReactNode } from "react";
import { ProviderMuiTheming } from "./ProviderMuiTheming";

type Props = {
  children: ReactNode;
};

export function GlobalFeatures({ children }: Props) {
  return <ProviderMuiTheming>{children}</ProviderMuiTheming>;
}
