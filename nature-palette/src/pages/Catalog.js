import Navbar from "./Navbar";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Catalog() {

  const navigate = useNavigate();

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const products = [
    { id:'1', src: one, name: "ZZ Plant", remark: "Easy Care" },
    { id:'2', src: two, name: "Large Fiddle Leaf Fig Tree", remark: "Best Sellers!" },
    { id:'3', src: three, name: "Olive Tree", remark: "Pet Friendly" },
    { id:'4', src: four, name: "Large Bird of Paradise", remark: "Easy Care" },
    { id:'5', src: five, name: "Large Dracaena Warneckii", remark: "Low Fuss" },
    { id:'6', src: six, name: "Money Tree Plant", remark: "Trending Plant" },
  ];

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleViewDetails = (product) => {
    navigate(`/Catalog/${product.id}`, { state: { product } });
  };

  return (
    <div className="catalog">
      <Navbar logotypeColor={"logo__1"} catalogLi={"catalogLi"} />
      <h1>
        <span>Our</span> Plants
      </h1>

      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id} onMouseEnter={() => handleMouseEnter(product.id)}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}>
            <img src={product.src} alt={product.name}/>
            <div className="remark">{product.remark}</div>
            <h2>{product.name}</h2>
            {hoveredProductId === product.id &&
           (<button onClick={() => handleViewDetails(product)} className="btn-details">View Details</button>)}
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Catalog;
