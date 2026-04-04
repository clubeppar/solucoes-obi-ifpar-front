import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";

import { Context } from "./Provider";
import Loading from "./components/global_components/Loading";
import RoutePages from "./routes/RoutePages";

export default function App() {
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
