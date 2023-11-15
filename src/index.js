import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationManagerProvider>
      <App />
    </ApplicationManagerProvider>
  </React.StrictMode>
);
