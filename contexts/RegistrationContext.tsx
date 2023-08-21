import React, { createContext, useContext, useState } from "react";

interface RegistrationContextType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined
);

export const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error(
      "useRegistrationContext must be used within a RegistrationContextProvider"
    );
  }
  return context;
};

interface RegisterContextProviderProps {
  children: React.ReactNode;
}

export const RegistrationContextProvider: React.FC<
  RegisterContextProviderProps
> = ({ children }) => {
  const [data, setData] = useState<any>(null);

  return (
    <RegistrationContext.Provider value={{ data, setData }}>
      {children}
    </RegistrationContext.Provider>
  );
};
