import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./components/pages/Landingpage";
import Grid from "./components/pages/Grid";
import Admin from "./components/global_components/Admin";
import Credits from "./components/subcomponents/Credits";

function App() {
  return (
    <BrowserRouter basename={"solucoes-obi-ifpar"}>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
