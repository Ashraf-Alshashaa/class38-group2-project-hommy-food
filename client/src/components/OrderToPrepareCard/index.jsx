import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import "./style.css";
import OrderToPreparePopup from "../OrderToPreparePopup";

const OrderToPrepareCard = ({ order, statusArr }) => {
  const [status, setStatus] = useState();
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
        {order.status !== "complete" && (
          <Dropdown
            data={statusArr.map((item) => {
              return {
                title: item,
                _id: item,
              };
            })}
            displayText={status ? status : "status"}
            onClick={(e) => {
              setStatus(e.target.id);
            }}
          />
        )}
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
