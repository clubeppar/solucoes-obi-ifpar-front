import { Routes, Route } from "react-router-dom";

import { Landingpage } from "@pages/LandingPage";
import { Grid } from "@pages/GridPage";
import { Admin } from "@pages/AdminPage";
import { Credits } from "@pages/CreditsPage";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/grid" element={<Grid />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  );
}
