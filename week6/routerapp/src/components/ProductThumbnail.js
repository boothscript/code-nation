import React from "react";

import "./ProductThumbnail.css";

const ProductThumbnail = ({ productName, productPrice, addToCartFunc }) => {
  return (
    <div className="product">
      <img src="https://picsum.photos/200/90" alt="pic" />
      <h3>{productName}</h3>
      <p>£{productPrice}</p>
      <button onClick={addToCartFunc}>Add to Cart</button>
    </div>
  );
};

export default ProductThumbnail;
