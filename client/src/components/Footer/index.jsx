import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <button className="footer-about-btn" to="/about">
        <Link className="footer-about-link" to="/about-us">
          ABOUT-US
        </Link>
      </button>
      <div className="footer-nav">
        <Link className="footer-shopping-cart-icon" to="/shoppingCart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <Link className="footer-home-icon" to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link className="footer-share-icon" to="/checkout">
          <i className="fa-solid fa-share"></i>
        </Link>
      </div>
      <button
        className="footer-top-btn"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        TO TOP
      </button>
    </div>
  );
};

export default Footer;
