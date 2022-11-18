import React from "react";
import PropTypes from "prop-types";
import chefImg from "../../../public/images/img_avatar.png";
import "./style.css";

const OrderDetailsCards = () => {
  return (
    <div className="order-details-card-container">
      <div className="order-details-img-container">
        <img className="order-details-img" src={chefImg} />
      </div>
      <div className="order-details-info">
        <div className="order-details-basic-info">
          <p>
            <span style={{ color: "black", fontSize: "15px" }}>Mail name:</span>
            Pizza
          </p>
          <p>Chef name: Sako</p>
          <p>Delivery type: Drop point</p>
        </div>
        <div className="order-details-price-info">
          <p>Quantity: 5</p>
          <p>Price: 50$</p>
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
