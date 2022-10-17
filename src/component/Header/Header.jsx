import "./Header.scss";
import orange from "./../../assets/6.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="parentContent">
          <div className="headLeft">
            <div className="orang">
              <img src={orange} alt="" />
              <p>00 days 00:00:00</p>
              <h5>Oranges</h5>
              <span>14$</span>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="contentHeader">
            <h1> Juice It While It's Fresh </h1>
            <p>Get Oranges From Our Shop</p>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed
              porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.
            </p>
            <button>SHOP NAW</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
