import React from "react";
import PropTypes from "prop-types";
import chefImg from "../../../public/images/img_avatar.png";
import "./style.css";

const OrderDetailsCards = ({ setOpenOpenDetails }) => {
  return (
    <div className="order-details-card-container">
      <div className="order-details-img-container">
        <img className="order-details-img" src={chefImg} />
      </div>
      <div className="order-details-info">
        <div className="order-details-basic-info">
          <p>Mail name:</p>
          <p>Chef name:</p>
          <p>Delivery type:</p>
        </div>
        <div className="order-details-price-info">
          <p>Quantity:</p>
          <p>Price:</p>
        </div>
      </div>
    </div>
  );
};

OrderDetailsCards.propTypes = {
  setOpenOpenDetails: PropTypes.bool,
  orderItems: PropTypes.array,
};
export default OrderDetailsCards;
