import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div className="app">
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Catalog" element={<Catalog />}/>
      </Routes>
    </div>
  )
}

export default App