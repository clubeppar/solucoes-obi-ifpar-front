import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";

import { RoutePages } from "./RoutePages";
import { Context } from "@provider";
import { Loading } from "@shared/Loading";

export function App() {
  const { isLoading } = useContext(Context);

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {isLoading && <Loading />}
      <BrowserRouter basename="/solucoes-obi-ifpar">
        <RoutePages />
      </BrowserRouter>
    </div>
  );
}
