import { Routes, Route } from "react-router-dom";

import { LandingPage } from "@pages/landingPage";
import { ProblemsPage } from "@pages/problemsPage";
import { AdminPage } from "@pages/adminPage";
import { CreditsPage } from "@pages/creditsPage";
import { NotFoundPage } from "@pages/NotFoundPage";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Problems" element={<ProblemsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
