import { HashRouter } from "react-router-dom";

import { NotificationProvider } from "@providers";
import { useLoading, useNotification } from "@hooks";

import { RoutePages } from "./RoutePages";

import { Loading } from "@ui/Loading";

export function App() {
  const { isLoading } = useLoading();
  const { haveNotification } = useNotification();

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {haveNotification && <NotificationProvider />}
      {isLoading && <Loading />}
      <HashRouter>
        <RoutePages />
      </HashRouter>
    </div>
  );
}
