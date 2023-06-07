import Navbar from "./Navbar";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";

function Catalog() {
  const products = [
    { id:'1', src: one, name: "ZZ Plant", remark: "Easy Care" },
    { id:'2', src: two, name: "Large Fiddle Leaf Fig Tree", remark: "Best Sellers!" },
    { id:'3', src: three, name: "Olive Tree", remark: "Pet Friendly" },
    { id:'4', src: four, name: "Large Bird of Paradise", remark: "Easy Care" },
    { id:'5', src: five, name: "Large Dracaena Warneckii", remark: "Low Fuss" },
    { id:'6', src: six, name: "Money Tree Plant", remark: "Trending Plant" },
  ];

  return (
    <div className="catalog">
      <Navbar logotypeColor={"logo__1"} catalogLi={"catalogLi"} />
      <h1>
        <span>Our</span> Plants
      </h1>

      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.src} alt={product.name}/>
            <div className="remark">{product.remark}</div>
            <h2>{product.name}</h2>
            <button className="btn-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
