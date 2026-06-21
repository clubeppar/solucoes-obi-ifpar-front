import { BrowserRouter } from "react-router-dom";

import { RoutePages } from "./RoutePages";

import { Loading } from "@shared/Loading";
import { Notification } from "@shared/Notification";

import { useLoading, useNotification } from "@hooks";

export function App() {
  const { isLoading } = useLoading();
  const { haveNotification } = useNotification();

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {haveNotification && <Notification />}
      {isLoading && <Loading />}
      <BrowserRouter basename="/solucoes-obi-ifpar">
        <RoutePages />
      </BrowserRouter>
    </div>
  );
}
