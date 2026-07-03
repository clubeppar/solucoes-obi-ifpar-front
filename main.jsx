import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./src/app/App";
import { MainProvider } from "./src/providers/index";

import "./src/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
