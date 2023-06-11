import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems([...cartItems, product]);
  };
  
  useEffect(() => {
    console.log("Updated cart items:", cartItems);
  }, [cartItems]);

  console.log("Cart items in App:", cartItems);

  return (
    <div className="app">
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalog"
            element={<Catalog handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<Product handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>

    </div>
  );
}

export default App;