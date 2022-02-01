import { ReactNode } from "react";

import { TmdbProvider } from "./Series";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";

interface ProvidersData {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersData) => {
  return (
    <UserProvider>
      <TmdbProvider>
        <AuthProvider>{children}</AuthProvider>
      </TmdbProvider>
    </UserProvider>
  );
};
