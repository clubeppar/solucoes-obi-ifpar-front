import { useContext } from "react";
import { NotificationContext } from "../providers/index";

export function useNotification() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotification deve ser usado dentro de NotificationProvider",
    );
  }

  return context;
}
