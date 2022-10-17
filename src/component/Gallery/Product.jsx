import React from "react";
import "./Product.scss";

const Product = (props) => {
  return (
    <section className="box">
      <div>
        <img src={props.img} alt="logo" />
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <span>{props.price}</span>
      <button>BUY NOW</button>
    </section>
  );
};
  
export default Product;
