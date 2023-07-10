import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Award from "./pages/Award";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";
const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interest />} />
          <Route path="/awards" element={<Award />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
