import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authentication";
import OrdersHistoryCard from "../OrderHistoryCard";
import "./style.css";

const OrdersHistory = () => {
  // const { user } = useContext(AuthContext);
  return (
    <div className="orders-history-container">
      <h1 className="orders-history-title">My orders history</h1>
      <div className="orders-history-card-container">
        {/* {user?.orderHistory?.map((order, index) => {
          <div key={index}>
            <OrdersHistoryCard order={order} />
          </div>;
        })} */}
        <OrdersHistoryCard />
      </div>
    </div>
  );
};

OrdersHistory.propTypes = {};

export default OrdersHistory;
