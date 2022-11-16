import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

import DeliveryIcon from "./greenScooterDelivery.png";
import ShoppingCart from "../ShoppingCart";
const MealCard = ({
  id,
  image,
  title,
  quantity,
  chefName,
  price,
  delivery,
  chefImage,
  chefId,
}) => {
  return (
    <>
      <div className=" result-meal card m-1">
        <Link className="image-Container" to={`/mealDetail/${id}`}>
          {" "}
          <img src={image} className="card-img-top" alt={title} />
          <div className="meal-price-container">€ {price}</div>
        </Link>
        <div className="title">
          <h5>{title}</h5>
          <h6>{quantity} Left</h6>
        </div>
        <div className="delivery-icon">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1vw",
            }}
            to={`/profile/${chefId}`}
          >
            {" "}
            <div className="chip">
              <img src={chefImage} alt="Person" width="96" height="96" />
              {chefName}
            </div>
          </Link>
          <div className="chip">
            <img src={DeliveryIcon} alt="Person" width="96" height="96" />
            {delivery}
          </div>
          {/* <Link to="/shoppingCart"> */}
          <>
            <ShoppingCart chefId={chefId} id={id} />
          </>
          {/* <i className="fa-solid fa-cart-shopping"></i> */}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};
MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chefImage: PropTypes.string,
  chefName: PropTypes.string,
  chefId: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string.isRequired,
  delivery: PropTypes.string,
};
export default MealCard;
