import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import RedirectHandler from "../pages/RedirectHandler";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/statistics" element={<StatisticsPage />} />
    <Route path=":shortcode" element={<RedirectHandler />} />
    <Route path="*" element={<div>404 - Page not found</div>} />
  </Routes>
);
