import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { About } from "./routes/About";
import { CV } from "./routes/CV";
import { Home } from "./routes/Home";
import { News } from "./routes/News";
import { Publications } from "./routes/Publications";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="cv" element={<CV />} />
          <Route path="publications" element={<Publications />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
