import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProps {
  children: ReactNode;
}

interface ModalProviderData {
  openingModal: () => void;
  closingModal: () => void;
}

const ModalContext = createContext<ModalProviderData>({} as ModalProviderData);

export const ModalProvider = ({ children }: ModalProps) => {
  const [openModal, setOpenModal] = useState(false);

  //   console.log("modallllllll", openModal);

  const openingModal = () => {
    setOpenModal(true);
    // console.log("teste");
  };

  const closingModal = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider value={{ openingModal, closingModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
