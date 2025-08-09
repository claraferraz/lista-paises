import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountryProvider>
  </StrictMode>
);
