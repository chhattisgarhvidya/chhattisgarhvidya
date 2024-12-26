"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Define the type for the context
interface GlobalStateContextType {
  isOpen: boolean;
  toggle: () => void;
}

// Create the context
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Reset the state on reload and check sessionStorage for persisted value
  useEffect(() => {
    // On page reload, reset the state to false
    sessionStorage.removeItem("isOpen"); // Clears the sessionStorage to reset on reload
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <GlobalStateContext.Provider value={{ isOpen, toggle }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use global state
export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
