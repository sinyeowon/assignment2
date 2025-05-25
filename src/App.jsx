import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
