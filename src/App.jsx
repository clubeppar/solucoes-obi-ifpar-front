import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { Context } from "./Provider";

import Loading from "./components/global_components/Loading";

import Landingpage from "./components/pages/Landingpage";
import Grid from "./components/pages/Grid";
import Admin from "./components/pages/Admin";
import Credits from "./components/pages/Credits";

export default function App() {
  const { isLoading } = useContext(Context);

  return (
    <div className={isLoading ? "overflow-hidden" : ""}>
      {isLoading && <Loading />}
      <BrowserRouter basename={"solucoes-obi-ifpar"}>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
