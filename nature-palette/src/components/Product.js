import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Product = ({ handleAddToCart }) => {
  const location = useLocation();
  const { product } = location.state;

  const addToCart = (product) => {
    handleAddToCart(product);
  };

  return (
    <div>
      <Navbar logotypeColor={"logo__1"} />
      <div className="details-container">
        <img className="img-details" src={product.src} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <p>₱{product.price}</p>
          <button className="btn" onClick={() => addToCart(product)}>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
