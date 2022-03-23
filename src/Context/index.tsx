import { ReactNode } from "react";

import { TmdbProvider } from "./Series";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";

interface ProvidersData {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersData) => {
  return (
    <UserProvider>
      <TmdbProvider>
        <ModalProvider>
          <AuthProvider>{children}</AuthProvider>
        </ModalProvider>
      </TmdbProvider>
    </UserProvider>
  );
};
