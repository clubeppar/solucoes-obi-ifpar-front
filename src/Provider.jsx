import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLightMode, setisLightMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLightMode);
  }, [isLightMode]);

  return (
    <Context.Provider
      value={{ isLoading, setIsLoading, isLightMode, setisLightMode }}
    >
      {children}
    </Context.Provider>
  );
}
