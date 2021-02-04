import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Product Title</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/511CwlZqtYL._SX397_BO1,204,203,200_.jpg"
        alt="book image"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
