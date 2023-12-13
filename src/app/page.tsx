"use client";

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";

export default function Page() {
    return (
        <Router>
          <Suspense fallback={<div>Loading.....</div>}>
            <div className="overflow-x-hidden relative project-container">
              <Routes>
              <Route path="/" element={<LandingPage />} />
              </Routes>
            </div>
          </Suspense>
        </Router>
    )
}
