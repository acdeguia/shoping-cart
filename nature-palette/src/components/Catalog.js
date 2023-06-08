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
    { id:'1', src: one, name: "ZZ Plant", remark: "Easy Care", details: "The ZZ Plant is characterized by its waxy green leaves above the surface of its potting mix, and its large potato-like rhizomes underneath. These rhizomes store water, making the ZZ a hardy, drought-tolerant houseplant that only needs water every few weeks." },
    { id:'2', src: two, name: "Large Fiddle Leaf Fig Tree", remark: "Best Sellers!", details: "With their small, silvery, gray-green leaves, olive trees (this specific variety is the Common Olive Tree) make beautiful houseplants. These Mediterranean plants need a lot of bright, direct sunlight. South and west facing windows are ideal. Pet friendly. (Pro-tip: Olive branches make beautiful additions to bouquets, something to keep in mind as yours grows for years to come.)" },
    { id:'3', src: three, name: "Olive Tree", remark: "Pet Friendly", details: "With their small, silvery, gray-green leaves, olive trees (this specific variety is the Common Olive Tree) make beautiful houseplants. These Mediterranean plants need a lot of bright, direct sunlight. South and west facing windows are ideal. Pet friendly. (Pro-tip: Olive branches make beautiful additions to bouquets, something to keep in mind as yours grows for years to come.)  " },
    { id:'4', src: four, name: "Large Bird of Paradise", remark: "Easy Care", details: "With its broad vibrant green leaves, the Bird of Paradise brings a touch of the tropics to any room. It's named after its unique flowers, which resemble brightly colored birds in flight. The Bird of Paradise thrives in warmer conditions with plenty of sunlight. Sized to ship best, our large Bird of Paradise arrives with room to grow as it adapts to your home’s conditions." },
    { id:'5', src: five, name: "Large Dracaena Warneckii", remark: "Low Fuss", details: "A member of the popular, low-maintenance Dracaena plant family, the Dracaena Warneckii (sometimes called a corn plant) has a tall and slender silhouette that is great in corners, behind couches, or anywhere you want to add height without bulk. Sized to ship best, our large Dracaena arrives with room to grow as it adapts to your home’s conditions. " },
    { id:'6', src: six, name: "Money Tree Plant", remark: "Trending Plant", details: "Said to bring good luck and fortune, the Money Tree is the perfect plant to add to any room of your home to create good Feng Shui. It is known for its resilience, ease of growth, and fun braided trunk." },
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
