import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLightMode);
  }, [isLightMode]);

  return (
    <ThemeContext.Provider
      value={{
        isLightMode,
        setIsLightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
