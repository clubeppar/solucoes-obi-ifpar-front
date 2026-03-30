import Landingpage from "./components/Landingpage";
import Grid from "./components/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={"solucoes-obi-ifpar"}>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
