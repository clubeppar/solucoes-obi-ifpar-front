import { HashRouter } from "react-router-dom";

import { useLoading, useNotification } from "@hooks";

import { RoutePages } from "./RoutePages";

import { Loading } from "@ui/Loading";
import { Notification } from "@ui/Notification";

export function App() {
  const { isLoading } = useLoading();
  const { haveNotification } = useNotification();

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {haveNotification && <Notification />}
      {isLoading && <Loading />}
      <HashRouter>
        <RoutePages />
      </HashRouter>
    </div>
  );
}
