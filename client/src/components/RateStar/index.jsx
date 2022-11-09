import React, { useState } from "react";
import { useEffect } from "react";
import "./style.css";

const RateStar = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [msg, setMsg] = useState("");

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          // Required the end point of the fetch for example ...
          // `${process.env.BASE_SERVER_URL}/api/user/create`
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentValue),
          }
        );
        await response.json();
      } catch (error) {
        setMsg("something went wrong");
      }
    })();
  }, [currentValue]);

  const stars = Array(5).fill(0);
  return (
    <div className="star-container">
      <h3>Rate the chef</h3>
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
        <span>{msg}</span>
      </div>
    </div>
  );
};

export default RateStar;
