import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import { Link } from "react-router-dom";
import "./style.css";

const MealList = ({ id }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="chef-profile-create-meal-container">
      <div className="chef-profile-create-meal-header">
        <div className="chef-profile-meals-list">
          <h3 className="meals-list-title">Meals list</h3>
        </div>
        {user?._id === id && (
          <div className="chef-profile-create-meal">
            <Link to={"/create-meal"}>
              <i className="fa-light fa-plus"></i> Create a meal
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

MealList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MealList;
