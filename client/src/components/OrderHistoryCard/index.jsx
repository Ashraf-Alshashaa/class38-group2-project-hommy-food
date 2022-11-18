import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import OrdersDetailsCards from "../../components/OrderDetailsCards";

const OrdersHistoryCard = ({ chefId, createdAt, items }) => {
  const [openOrderDetails, setOpenOpenDetails] = useState(false);
  return (
    <div className="order-history-card-container">
      {/* <h5>Date: {createdAt} </h5>
          <h5>Chef name: {chefId}</h5>
          <h5>Delivery type: </h5>
          <h5>Total payment: </h5> */}
      <OrdersDetailsCards />
      <OrdersDetailsCards />
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
