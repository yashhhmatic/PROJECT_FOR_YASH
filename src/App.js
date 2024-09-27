import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about-us" exact Component={About} />
    </Routes>
  );
}

export default App;
