import React from "react";
import OrdersHistoryCard from "../OrderHistoryCard";
import "./style.css";

const OrdersHistory = () => {
  return (
    <div className="orders-history-container">
      <div>
        <h1 className="orders-history-title">My orders history</h1>
        <div className="orders-history-card-container">
          <OrdersHistoryCard
            chefName={"name"}
            orderDate={"Date"}
            deliveryType={"DeliveryType"}
            totalPayment={"Payment"}
          />
          <OrdersHistoryCard
            chefName={"name"}
            orderDate={"Date"}
            deliveryType={"DeliveryType"}
            totalPayment={"Payment"}
          />
          <OrdersHistoryCard
            chefName={"name"}
            orderDate={"Date"}
            deliveryType={"DeliveryType"}
            totalPayment={"Payment"}
          />
          <OrdersHistoryCard
            chefName={"name"}
            orderDate={"Date"}
            deliveryType={"DeliveryType"}
            totalPayment={"Payment"}
          />
          <OrdersHistoryCard
            chefName={"name"}
            orderDate={"Date"}
            deliveryType={"DeliveryType"}
            totalPayment={"Payment"}
          />
        </div>
      </div>
    </div>
  );
};

OrdersHistory.propTypes = {};

export default OrdersHistory;
