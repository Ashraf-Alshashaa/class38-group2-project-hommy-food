import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import OrdersDetailsCards from "../../components/OrderDetailsCards";

const OrdersHistoryCard = ({ chefId, createdAt, items }) => {
  const [openOrderDetails, setOpenOpenDetails] = useState(false);
  return (
    <div>
      {openOrderDetails ? (
        <div className="update-profile-popup-container">
          <OrdersDetailsCards
            setOpenOpenDetails={setOpenOpenDetails}
            orderItems={items}
          />
        </div>
      ) : (
        <div className="order-history-card-container">
          <div className="order-history-card-body">
            <h5>Date: {createdAt} </h5>
            <h5>Chef name: {chefId}</h5>
            <h5>Delivery type: </h5>
            <h5>Total payment: </h5>
          </div>
          <div className="order-history-btn-container">
            <button
              className="order-history-btn"
              onClick={() => setOpenOpenDetails(true)}
            >
              <i className="fa-solid" /> <h5>View order details</h5>
            </button>
          </div>
        </div>
      )}
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
