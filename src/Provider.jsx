import { createContext, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>{children}</Context.Provider>
  );
}
