import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Product from "./components/Product";

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