import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";


const MyRouter = () => {
  return (
    <Routes>
        <Route exact path="/" component={Home} />
    </Routes>
  );
};

export default MyRouter;