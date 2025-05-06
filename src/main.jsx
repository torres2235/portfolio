import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/context.jsx";
import "./styles/index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
