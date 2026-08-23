import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./theme/brands/ochre/light.css";
import "./theme/brands/ochre/dark.css";
import "./theme/brands/ochre/global.css";

import "./theme/brands/alternative/light.css";
import "./theme/brands/alternative/dark.css";
import "./theme/brands/alternative/global.css";

import "./theme/tokens/light.css";
import "./theme/tokens/dark.css";
import "./theme/tokens/global.css";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
