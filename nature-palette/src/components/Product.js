import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
// import Cart from "./Cart";

const Product = () => {
  const location = useLocation();
  const { product } = location.state;

  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
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

      {/* {showCart && <Cart onClose={closeCart} cartItems={cartItems}/>} */}
    </div>
  );
};

export default Product;