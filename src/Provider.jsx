import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <Context.Provider
      value={{ isLoading, setIsLoading, isDarkMode, setIsDarkMode }}
    >
      {children}
    </Context.Provider>
  );
}
