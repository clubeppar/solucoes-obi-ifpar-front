import { IoMdClose } from "react-icons/io";

import { useNotification } from "@hooks";

export function Notification() {
  const { notification, hideNotification } = useNotification();

  if (!notification) return null;

  return (
    <div
      className={`justify-between gap-2 rounded-lg p-4 text-sm font-medium bg-gray-900 w-fit min-w-75 flex`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`border rounded-md bg-gray-800 p-1 ${notification.borderClass}`}
        >
          <span className={notification.textClass}>{notification.icon}</span>
        </div>
        {notification.message}
      </div>
      <button
        onClick={hideNotification}
        className="ml-auto text-gray-400 hover:text-gray-500"
      >
        <IoMdClose className="size-5" />
      </button>
    </div>
  );
}
