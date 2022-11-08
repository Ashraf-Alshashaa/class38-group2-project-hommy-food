import React, { useState } from "react";

const RateStar = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const stars = Array(5).fill(0);
  return (
    <div className="star">
      {stars.map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${
            (hoverValue || currentValue) > index ? "mouse-in" : "mouse-out"
          }`}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default RateStar;
