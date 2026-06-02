import { BrowserRouter } from "react-router-dom";

import { RoutePages } from "./RoutePages";

import { Loading } from "@shared/Loading";

import { useLoading } from "@hooks";

export function App() {
  const { isLoading } = useLoading();

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {isLoading && <Loading />}
      <BrowserRouter basename="/solucoes-obi-ifpar">
        <RoutePages />
      </BrowserRouter>
    </div>
  );
}
