
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Catalog"
          element={<Catalog addToCart={addToCart} />}
        />
        <Route
          path="/Catalog/:id"
          element={<Product addToCart={addToCart} />}
        />
        <Route
          path="/Cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
