import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SideNavigation from "./SideNavigation";

const Product = () => {
  const location = useLocation();
  const { product } = location.state;

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Navbar logotypeColor={"logo__1"} />
      <div className="details-container">
        <img className="img-details" src={product.src} alt={product.name} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.details}</p>
          <button className="btn" onClick={toggleCart}>
            Add to Bag
          </button>
        </div>
      </div>

      {showCart && <SideNavigation />}
    </div>
  );
};

export default Product;