import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import OrdersDetailsCards from "../../components/OrderDetailsCards";

const OrdersHistoryCard = ({ order }) => {
  const { createdAt, deliveryType, items } = order;
  const totalPricesOfMeal = items?.map((item) => item.quantity * item.price);
  const getSum = (total, num) => total + num;
  const totalPriceOfOrder = totalPricesOfMeal?.reduce(getSum, 0);
  return (
    <div className="order-history-card-container">
      <h5 className="order-date">
        Order date:
        <span className="order-date-value">{createdAt}</span>
      </h5>
      {items?.map((item, index) => {
        return (
          <div key={index}>
            {<OrdersDetailsCards item={item} deliveryType={deliveryType} />}
          </div>
        );
      })}
      <h5 className="order-price">
        Total price:
        <span className="order-total-price-value">€{totalPriceOfOrder}</span>
      </h5>
    </div>
  );
};

OrdersHistoryCard.propTypes = {
  order: PropTypes.object,
};

export default OrdersHistoryCard;
