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
}) => {
  return (
    <div className=" resultMeal card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className="title">
          <h5>{title}</h5>
        </div>
        <div className="meal-info">
          <p>Quantity {quantity}</p>
          <p>cuisine indian{cuisine}</p>
          <p>category non-veg{category}</p>
        </div>
        <p className="card-text" style={{ fontSize: "0.8rem" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card content. Some quick example text to build on the
          title and make up the bulk of the card content
        </p>
        <p className="meal-ingredients">
          <strong>Ingredients:</strong> {ingredients.join(", ")}{" "}
        </p>
        <p className="badge rounded-pill text-bg-danger">price: {price}</p>
        <div className="links">
          <Link to="/chefProfile">chefName here</Link>
          <Link to="/">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chefName: PropTypes.string,
  ingredients: PropTypes.array,
  isAvailable: PropTypes.bool,
  quantity: PropTypes.number,
  cuisine: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
};
export default MealCard;
