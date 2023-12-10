import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationManagerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApplicationManagerProvider>
  </React.StrictMode>
);
