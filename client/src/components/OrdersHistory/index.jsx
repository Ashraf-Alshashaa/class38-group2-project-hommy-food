import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authentication";
// import image from "../../../public/images/img_avatar.png";
import OrdersHistoryCard from "../OrderHistoryCard";
import "./style.css";

const OrdersHistory = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="orders-history-container">
      <h1 className="orders-history-title">My orders</h1>
      <div className="orders-history-card-container">
        {user?.orderHistory.reverse().map((order, index) => {
          return (
            <div key={index}>
              <OrdersHistoryCard order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

OrdersHistory.propTypes = {};

export default OrdersHistory;
