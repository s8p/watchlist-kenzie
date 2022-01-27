import { ReactNode } from "react";

import { TmdbProvider } from "./Series";
import { AuthProvider } from "./Auth";

interface ProvidersData {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersData) => {
  return (
    <TmdbProvider>
      <AuthProvider>{children}</AuthProvider>
    </TmdbProvider>
  );
};
