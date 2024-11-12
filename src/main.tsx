import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-portfolio"> {/* Updated with your exact repo name */}
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);