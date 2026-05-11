import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";

import { Context } from "@src/Provider";
import { Loading } from "@/global_components/Loading";
import { RoutePages } from "@src/routes/RoutePages";

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
