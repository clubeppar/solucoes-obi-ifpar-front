import { HashRouter } from "react-router-dom";
import { useContext } from "react";

import { RoutePages } from "./RoutePages";

import { Loading } from '../components/ui/Loading'
import { NotificationProvider } from "../providers/index";

import { useLoading, useNotification } from "../hooks/index";

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
