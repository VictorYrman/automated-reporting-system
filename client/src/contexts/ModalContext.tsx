import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined)
    throw new Error("Ошибка контекста модального окна");

  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};
