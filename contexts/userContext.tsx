import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<any>(null);

  return (
    <UserContext.Provider value={{ user: data, setUser: setData }}>
      {children}
    </UserContext.Provider>
  );
};
