import { createContext, useState, useCallback } from "react";

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [pendingRequests, setPendingRequests] = useState(0);

  const startLoading = useCallback(() => {
    setPendingRequests((count) => count + 1);
  }, []);

  const stopLoading = useCallback(() => {
    setPendingRequests((count) => Math.max(count - 1, 0));
  }, []);

  // Talvez futuramente usar useMemo (se usar, colocar em todos providers)
  // const value = useMemo(() => ({isLoading: ..., startLoading, stopLoading}), [...])

  // e no Provider:
  // LoadingContext.Provider value={value}

  return (
    <LoadingContext.Provider
      value={{
        isLoading: pendingRequests > 0,
        startLoading,
        stopLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
