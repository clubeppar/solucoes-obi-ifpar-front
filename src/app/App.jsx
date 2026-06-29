import { HashRouter } from "react-router-dom";
import { useContext } from "react";

import { RoutePages } from "./RoutePages";

import { LoadingProvider } from "./providers/index";
import { NotificationProvider } from "./providers/index";

import { useLoading, useNotification } from "./store/index";

export function App() {
  const { isLoading } = useLoading();
  const { haveNotification } = useNotification();

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {haveNotification && <NotificationProvider />}
      {isLoading && <LoadingProvider />}
      <HashRouter>
        <RoutePages />
      </HashRouter>
    </div>
  );
}
