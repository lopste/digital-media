import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const node = document.querySelector("#app-root");
const root = createRoot(node as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);