import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarInternacionais from "./pages/CarInternacionais";
import CarNacionais from "./pages/CarNacionais";

const MyRouter = () => {
  return (
    <Routes>
      <Route index Component={Home} />
      <Route path="/CarInternacionais" Component={CarInternacionais} />
      <Route path="/CarNacionais" Component={CarNacionais} />
    </Routes>
  );
};

export default MyRouter;