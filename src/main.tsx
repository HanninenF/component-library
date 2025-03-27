import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
/* import App from "./App.tsx";
import App2 from "./App2.tsx";
import App3 from "./App3.tsx";
import App4 from "./App4.tsx";
import App5 from "./App5.tsx"; */
import App6 from "./App6";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App6 />
    {/*   <App2 /> */}
    {/* <App3 /> */}
    {/*  <App4 /> */}
  </StrictMode>
);
