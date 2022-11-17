/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const ShoppingCartPopUp = ({ setCloseModal }) => {
  return (
    <div className="shopping-cart-popup-container">
      <div className="shopping-cart-popup-field">
        <div className="shopping-cart-popup-bar-header">
          <div className="close-bar">
            <p className="shopping-cart-popup-desc">Error</p>
            <button
              className="shopping-cart-popup-close-icon-btn"
              onClick={() => setCloseModal(false)}
            >
              <i id="popup-close-x" className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
        <div className="shopping-cart-error-container">
          <p>Sorry! you can't order from a different chef</p>
          <button
            id="shopping-cart-popup-close-btn"
            onClick={() => setCloseModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

ShoppingCartPopUp.propTypes = {
  setCloseModal: PropTypes.func.isRequired,
};

export default ShoppingCartPopUp;
