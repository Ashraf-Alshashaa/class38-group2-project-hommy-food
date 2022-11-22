import React from "react";
import OrderToPrepareCard from "../../components/OrderToPrepareCard";
import "./style.css";

const OrderToPrepare = () => {
  const statusArr = ["to prepare", "ready", "complete"];
  const orderToPrepare = [
    {
      orderId: "String",
      deliveryAddress: "van kaksksa",
      createdAt: "11-20-02929",
      deliveryType: "delivery",
      totalPrice: 50,
      status: "toPrepare",
      customerName: "Llskoc asmc",
      items: [
        {
          title: "Sarma",
          quantity: 2,
          mealPrice: 20,
        },
        {
          title: "macjj",
          quantity: 2,
          mealPrice: 20,
        },
        {
          title: "Saksoka",
          quantity: 2,
          mealPrice: 20,
        },
      ],
    },
    {
      orderId: "String",
      deliveryAddress: "String",
      deliveryType: "pickup",
      totalPrice: 50,
      createdAt: "Date",
      status: "ready",
      customerName: "Llskoc asmc",
      items: [
        {
          title: "String",
          quantity: 2,
          mealPrice: 20,
        },
      ],
    },
    {
      orderId: "String",
      deliveryAddress: "String",
      deliveryType: "pickup",
      totalPrice: 50,
      createdAt: "Date",
      status: "complete",
      customerName: "Llskoc asmc",
      items: [
        {
          title: "String",
          quantity: 2,
          mealPrice: 20,
        },
      ],
    },
    {
      orderId: "String",
      deliveryAddress: "String",
      deliveryType: "pickup",
      totalPrice: 50,
      createdAt: "Date",
      status: "complete",
      customerName: "Llskoc asmc",
      items: [
        {
          title: "String",
          quantity: 2,
          mealPrice: 20,
        },
      ],
    },
  ];

  return (
    <div className="order-to-prepare-page-container">
      <main className="order-to-prepare-main">
        <section className="order-to-prepare-container">
          {orderToPrepare.map(
            (order, idx) =>
              order.status === "toPrepare" && (
                <OrderToPrepareCard
                  order={order}
                  key={order.orderId + idx}
                  statusArr={statusArr}
                />
              )
          )}
        </section>
        <section className="order-ready-container">
          {orderToPrepare.map(
            (order, idx) =>
              order.status === "ready" && (
                <OrderToPrepareCard
                  order={order}
                  key={order.orderId + idx}
                  statusArr={statusArr}
                />
              )
          )}
        </section>
      </main>
      <section>
        {orderToPrepare.map(
          (order, idx) =>
            order.status === "complete" && (
              <OrderToPrepareCard
                order={order}
                key={order.orderId + idx}
                statusArr={statusArr}
              />
            )
        )}
      </section>
    </div>
  );
};

export default OrderToPrepare;
