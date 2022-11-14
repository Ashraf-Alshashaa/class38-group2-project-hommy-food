import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const RateOfChef = ({ chefData }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="rated-star-container">
      <div className="rated-star">
        {stars.map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-star ${
              chefData?.AvgCustomerRates > index ? "mouse-in" : "mouse-out"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

RateOfChef.propTypes = {
  chefData: PropTypes.object,
};

export default RateOfChef;
