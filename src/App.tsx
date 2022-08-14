import React from "react";
import Article from "./pages/Article";
import Home from "./pages/Home";
import "./styles/_global.scss";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
