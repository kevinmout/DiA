import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ColorSchemeScript } from "@mantine/core";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ColorSchemeScript defaultColorScheme="dark" />
    <App />
  </React.StrictMode>
);
