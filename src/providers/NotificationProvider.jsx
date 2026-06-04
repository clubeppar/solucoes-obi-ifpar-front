import { createContext, useState } from "react";

import { FaCheck } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

const statusTypes = {
  success: {
    icon: <FaCheck />,
    borderClass: "border-green-400",
    textClass: "text-green-400",
    message: (message) => `Sucesso: ${message}`,
  },
  error: {
    icon: <MdErrorOutline />,
    borderClass: "border-red-500",
    textClass: "text-red-500",
    message: (message) => `Erro: ${message}`,
  },
  warning: {
    icon: <IoWarningOutline />,
    borderClass: "border-yellow-400",
    textClass: "text-yellow-400",
    message: (message) => `Alerta: ${message}`,
  },
  javaFile: {
    icon: <IoWarningOutline />,
    borderClass: "border-yellow-400",
    textClass: "text-yellow-400",
    message: (message) =>
      `O nome do arquivo deve ser ${message}.java e a classe deve ser ${message}`,
  },
  emptyFile: {
    icon: <IoWarningOutline />,
    borderClass: "border-yellow-400",
    textClass: "text-yellow-400",
    message: (message) => `O arquivo ${message} não pode estar vazio`,
  },
};

function getNotificationStatus(type, message) {
  const notification = statusTypes[type];
  return {
    icon: notification.icon,
    borderClass: notification.borderClass,
    textClass: notification.textClass,
    message: notification.message(message),
  };
}

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const [haveNotification, setHaveNotification] = useState(false);

  function showNotification(type, message = "") {
    setNotification(getNotificationStatus(type, message));
    setHaveNotification(true);
  }

  function hideNotification() {
    setNotification(null);
    setHaveNotification(false);
  }

  return (
    <NotificationContext.Provider
      value={{
        notification,
        haveNotification,
        showNotification,
        hideNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
