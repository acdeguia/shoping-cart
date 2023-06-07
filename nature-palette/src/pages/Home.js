import Navbar from "./Navbar";

function Home() {

  return (
    <div className="home">
      <Navbar homeLi={"homeLi"}/>
      <div className="left">
        <div>
            <p className="welcome">WELCOME TO NATURE’S PALETTE!</p>
            <h1>Where Beauty and Diversity Bloom.</h1>
            <p className="explore-para">
              Explore our extensive selection of hundreds of exquisite products. No
              matter how remote, we deliver to all areas.
            </p>
            <a href="/catalog"><button className="shop-now" >Shop Now</button></a>
        </div>
        
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Home;
