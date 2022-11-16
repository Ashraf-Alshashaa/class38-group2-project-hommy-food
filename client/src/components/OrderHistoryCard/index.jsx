import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const OrdersHistoryCard = () => {
  return (
    <div className="order-history-card-container">
      <div className="order-history-card-title">
        <h3>OrderID:</h3>
      </div>
      <div className="order-history-card-body">
        <h5>Chef name: </h5>
        <h5>Date: </h5>
        <h5>Delivery type: </h5>
        <h5>Total payment: </h5>
      </div>
      <div className="order-history-btn-container">
        <button className="order-history-btn">
          <i className="fa-solid" /> <h5>View order details</h5>
        </button>
      </div>
    </div>
  );
};

OrdersHistoryCard.propTypes = {
  title: PropTypes.string,
};

export default OrdersHistoryCard;
