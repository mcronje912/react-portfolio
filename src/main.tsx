import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // HashRouter goes here
import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>     {/* Wraps everything */}
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);