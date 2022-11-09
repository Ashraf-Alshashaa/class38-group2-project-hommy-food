import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";
const MealCard = ({
  image,
  title,
  isAvailable,
  quantity,
  cuisine,
  ingredients,
  price,
}) => {
  return (
    <div className=" resultMeal card" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className="title">
          <h5>{title}</h5>
          <h6>non-veg</h6>
        </div>
        <div className="meal-info">
          <p>Quantity {quantity}</p>
          <p>cuisine indian{cuisine}</p>
          <div className="isAvailable">
            <p>
              Available
              <i
                className={`fa fa-circle  ${isAvailable ? "green" : "red"}`}
                aria-hidden="true"
              />
            </p>
          </div>
        </div>
        <p className="card-text">
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
