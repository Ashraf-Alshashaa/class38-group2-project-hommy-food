import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
const MealCard = ({ id, image, title, quantity, chefName, price }) => {
  return (
    <>
      <div className=" result-meal card m-1">
        <Link className="image-Container" to={`/mealDetail/${id}`}>
          {" "}
          <img
            src={image}
            className="card-img-top"
            alt={title}
            // onClick={() => navigate("/mealDetail", { replace: true })}
          />
        </Link>
        <div className="title">
          <h5>{title}</h5>
          <h6>{quantity} Left</h6>
        </div>
        <div className="links">
          <Link to="/chefProfile">Chef: {chefName}</Link>
          <div className="meal-price-container">
            <p className="meal-price ">€{price}</p>
          </div>
          <Link to="/">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>{" "}
      </div>
    </>
  );
};
MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chefName: PropTypes.string,
  ingredients: PropTypes.array,
  quantity: PropTypes.number,
  cuisine: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
};
export default MealCard;
