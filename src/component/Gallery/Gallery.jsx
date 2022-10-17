import React from "react";
import GalleryData from "../../Data/Data";
import Product from "./Product";
import "./Product.scss";

const Gallery = () => {
  const fetchData = GalleryData.map((item) => {
    return (
      <Product
        id={item.id}
        img={item.img}
        title={item.title}
        text={item.text}
        price={item.price}
      />
    );
  });
  return (
    <section className="container">
      <div className="boxesGallery">{fetchData}</div>
    </section>
  );
};

export default Gallery;
