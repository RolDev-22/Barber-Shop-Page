import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router
    basename={import.meta.env.MODE === "production" ? "/Barber-Shop-Page" : "/"}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
);
