import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const OrderDetailsCards = ({ item, deliveryType }) => {
  const { title, price, quantity, image, chefName } = item;
  return (
    <div className="order-details-card-container">
      <div className="order-details-img-container">
        <img className="order-details-img" src={image} />
      </div>
      <div className="order-details-info">
        <div className="order-details-basic-info">
          <p>
            <span className="meal-info-titles">Meal name:</span>
            {title}
          </p>
          <p>
            <span className="meal-info-titles">Chef name:</span> {chefName}
          </p>
          <p>
            <span className="meal-info-titles">Delivery type:</span>
            {deliveryType}
          </p>
        </div>
        <div className="order-details-price-info">
          <p>
            <span className="meal-info-titles">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="meal-info-titles">Price:</span>€ {price}
          </p>
        </div>
      </div>
    </div>
  );
};

OrderDetailsCards.propTypes = {
  item: PropTypes.object,
  deliveryType: PropTypes.string,
};
export default OrderDetailsCards;
