import React from "react";
import PropTypes from "prop-types";

const OrderDetailsCards = ({ setOpenOpenDetails, orderItems }) => {
  return (
    <div>
      <div className="order-history-card-container">
        <div className="order-history-card-body">
          <h5>Quantity: </h5>
          <h5>Price: </h5>
        </div>
        <div className="order-history-btn-container">
          <button
            className="order-history-btn"
            onClick={() => setOpenOpenDetails(false)}
          >
            <i className="fa-solid" /> <h5>Close</h5>
          </button>
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
