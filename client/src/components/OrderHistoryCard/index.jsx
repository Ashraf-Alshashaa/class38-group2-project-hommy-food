import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import OrdersDetailsCards from "../../components/OrderDetailsCards";

const OrdersHistoryCard = () => {
  return (
    <div className="order-history-card-container">
      {/* <h5>Date: {createdAt} </h5>
          <h5>Chef name: {chefId}</h5>
          <h5>Delivery type: </h5>
          <h5>Total payment: </h5> */}
      <h5 className="order-date">
        Order date:{" "}
        <span style={{ color: "black", fontSize: "15px" }}>
          November 24, 2022
        </span>
      </h5>
      <OrdersDetailsCards />
      <OrdersDetailsCards />
      <h5 className="order-price">
        Total price:
        <span style={{ color: "black", fontSize: "15px" }}>100$</span>
      </h5>
    </div>
  );
};

OrdersHistoryCard.propTypes = {
  title: PropTypes.string,
  chefId: PropTypes.string,
  createdAt: PropTypes.string,
  items: PropTypes.array,
};

export default OrdersHistoryCard;
