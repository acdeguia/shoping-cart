
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Product = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <Navbar logotypeColor={"logo__1"} />
      <div className="details-container">
        <img className="img-details" src={product.src} alt={product.name} />
        <div>
            <h2>{product.name}</h2>
            <p>{product.details}</p>
            <button className="bag-btn">Add to Bag</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
