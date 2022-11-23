import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import OrderToPreparePopup from "../OrderToPreparePopup";

const OrderToPrepareCard = ({ order }) => {
  const [openModal, setOpenModal] = useState(false);
  const { createdAt, deliveryType, totalPrice, items } = order;
  return (
    <article className="order-to-prepare-card-container">
      <section
        className="order-to-prepare-info-container"
        onClick={() => setOpenModal(!openModal)}
      >
        <div className="order-to-prepare-info-header">
          <p>{deliveryType}</p>
          <p>date: {createdAt}</p>
        </div>
        <div className="order-to-prepare-meals-titles">
          <h6>
            {items.map(
              ({ title }, idx, arr) =>
                `${title}${arr.length - 1 > idx ? "," : "."} `
            )}
          </h6>
          <p
            className="order-to-prepare-more-details"
            onClick={() => setOpenModal(!openModal)}
          >
            {" "}
            more details
          </p>
        </div>
      </section>
      <div className="order-to-prepare-price-status-container">
        {order.status === "toPrepare" && (
          <button className="order-to-prepare-status-btn">ready</button>
        )}
        {order.status === "ready" && (
          <button className="order-to-prepare-status-btn">complete</button>
        )}
        {order.status === "complete" && <p>complete</p>}

        <h6>price: {totalPrice} €</h6>
      </div>
      {openModal && (
        <div className="update-profile-popup-container">
          <OrderToPreparePopup setOpenModal={setOpenModal} order={order} />
        </div>
      )}
    </article>
  );
};

export default OrderToPrepareCard;

OrderToPrepareCard.propTypes = {
  order: PropTypes.object,
  statusArr: PropTypes.array,
};
