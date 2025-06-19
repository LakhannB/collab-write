import React from "react";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Editor from "./pages/Editor";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Editor />} />
    </Routes>
  );
};

export default App;
