import React from "react";
// import React, { useContext } from "react";
// import { AuthContext } from "../../contexts/authentication";
import image from "../../../public/images/img_avatar.png";
import OrdersHistoryCard from "../OrderHistoryCard";
import "./style.css";

const OrdersHistory = () => {
  // const { user } = useContext(AuthContext);
  const user = [
    {
      createdAt: "23-Nov-2022",
      deliveryType: "Pickup",
      items: [
        {
          title: "Pizza",
          price: 30,
          quantity: 2,
          image: { image },
          chefName: "Antony",
        },
        {
          title: "Pasta",
          price: 10,
          quantity: 3,
          image: { image },
          chefName: "Antony",
        },
      ],
    },
    {
      createdAt: "18-Nov-2022",
      deliveryType: "Delivery",
      items: [
        {
          title: "Shawerma",
          price: 5,
          quantity: 5,
          image: { image },
          chefName: "Osama",
        },
        {
          title: "Kabab",
          price: 25,
          quantity: 2,
          image: { image },
          chefName: "Osama",
        },
      ],
    },
  ];
  return (
    <div className="orders-history-container">
      <h1 className="orders-history-title">My orders history</h1>
      <div className="orders-history-card-container">
        {user?.map((order, index) => {
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
