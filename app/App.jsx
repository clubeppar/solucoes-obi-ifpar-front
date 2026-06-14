import { BrowserRouter } from "react-router-dom";

import { RoutePages } from "./RoutePages";

import { Loading } from "@shared/Loading";
import { Notification } from "@shared/Notification";

import { useLoading, useNotification } from "@hooks";
import { useEffect } from "react";

export function App() {
  const { isLoading } = useLoading();
  const { showNotification, haveNotification } = useNotification();

  useEffect(() => {
    showNotification("javaFile", "fila");
  }, [showNotification]);

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
