import React from "react";
import PropTypes from "prop-types";

const CategoryCard = ({ image, title, onClick }) => {
  return (
    <div className="col-md-3" onClick={onClick}>
      <div className="card">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CategoryCard;
