import React from "react";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// styles from Now UI template
import "assets/styles/bootstrap.min.css";
import "assets/scss/now-ui-kit.css";

// styles from Notus template
import "@fortawesome/fontawesome-free/css/all.css";
import "assets/styles/tailwind.min.css";
import "assets/styles/docs.css";

// // custom
import CustomDashboard from "./views/custom/CustomDashboard";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/:id" element={<CustomDashboard />} />
      <Route path="*" element={<Navigate to="index" />} />
    </Routes>
  </HashRouter>
);
