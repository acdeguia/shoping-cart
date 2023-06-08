import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App