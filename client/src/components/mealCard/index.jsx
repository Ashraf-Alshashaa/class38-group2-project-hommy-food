import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
const MealCard = ({
  image,
  title,
  quantity,
  cuisine,
  ingredients,
  price,
  category,
  description,
}) => {
  return (
    <div className=" result-meal card">
      <div className="image-Container">
        {" "}
        <img src={image} className="card-img-top" alt={title} />
      </div>
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="meal-info">
        <p>Quantity {quantity}</p>
        <p>cuisine indian{cuisine}</p>
        <p>category non-veg{category}</p>
      </div>
      <div className="card-text">
        <p style={{ fontSize: "0.7rem" }}>
          any of various flour-and-egg food preparations of Italian origin, made
          of thin, unleavened dough and produced in a variety of forms, usually
          served with a sauce and sometimes stuffed.{description}
        </p>
      </div>
      <div className="meal-ingredients">
        <p style={{ fontSize: "0.7rem" }}>
          <strong>Ingredients:</strong> {ingredients.join(", ")}{" "}
        </p>
      </div>
      <p className="badge rounded-pill text-bg-danger">price: {price}</p>
      <div className="links">
        <Link to="/chefProfile">chefName here</Link>
        <Link to="/">
          {" "}
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>{" "}
    </div>
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
};
export default MealCard;
