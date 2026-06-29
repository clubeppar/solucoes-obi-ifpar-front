import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./src/app/App";
import { MainProvider } from "./src/app/providers/index.js";

import "./src/app/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
);
