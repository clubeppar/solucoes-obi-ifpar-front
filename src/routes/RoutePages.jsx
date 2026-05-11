import { Routes, Route } from "react-router-dom";

import { Landingpage } from "@/pages/Landingpage";
import { Grid } from "@/pages/Grid";
import { Admin } from "@/pages/Admin";
import { Credits } from "@/pages/Credits";

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
