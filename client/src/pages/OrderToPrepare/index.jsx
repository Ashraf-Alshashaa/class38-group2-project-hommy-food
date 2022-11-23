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
        <section className="order-to-prepare-section">
          <h2 className="order-to-prepare-title">to prepare</h2>
          <div className="order-to-prepare-container">
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
          </div>
        </section>

        <section className="order-ready-section">
          <h2 className="order-to-prepare-title">ready</h2>

          <div className="order-ready-container">
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
          </div>
        </section>
      </main>
      <section className="order-complete-section">
        <h2 className="order-to-prepare-title">complete</h2>
        <div className="order-complete-container">
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
        </div>
      </section>
    </div>
  );
};

export default OrderToPrepare;
