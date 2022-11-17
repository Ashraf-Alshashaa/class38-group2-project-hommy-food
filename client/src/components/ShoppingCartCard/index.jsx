import React from "react";
import PropTypes from "prop-types";
import imageforStyle from "./jbq2pdytmaodjawkr1pe.jpg";
import "./style.css";
const ShoppingCartCard = () => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={imageforStyle} />
      </div>
      <div className="product-title">meat and vegs</div>
      <div className="product-price">12.99</div>
      <div className="product-quantity">
        <button className="shopping-cart-btn">+</button>
        <input type="text" />
        <button className="shopping-cart-btn">-</button>
      </div>
      <div className="product-removal">
        <button className="remove-product">Remove</button>
      </div>
      <div className="product-line-price">25.98</div>
    </div>
  );
};
ShoppingCartCard.PropTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
};
export default ShoppingCartCard;
