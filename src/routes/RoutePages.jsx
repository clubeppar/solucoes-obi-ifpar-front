import { Routes, Route } from "react-router-dom";

import Landingpage from "../components/pages/Landingpage";
import Grid from "../components/pages/Grid";
import Admin from "../components/pages/Admin";
import Credits from "../components/pages/Credits";

export default function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  );
}
