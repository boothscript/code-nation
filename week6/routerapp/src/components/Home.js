import React from "react";

import ProductThumbnail from "./ProductThumbnail";

import "./Home.css";

const products = [
  {
    productName: "Picture 1",
    productPrice: "300",
  },
  {
    productName: "Picture 1",
    productPrice: "300",
  },
  {
    productName: "Picture 1",
    productPrice: "300",
  },
  {
    productName: "Picture 1",
    productPrice: "300",
  },
];

const Home = ({ addToCartFunc }) => {
  const productCards = products.map((product) => {
    return (
      <ProductThumbnail
        productName={product.productName}
        productPrice={product.productPrice}
        addToCartFunc={addToCartFunc}
      />
    );
  });

  return (
    <div className="home">
      <h1>Welcome to my shop</h1>
      <div class="productCardWrapper">{productCards}</div>
    </div>
  );
};

export default Home;
