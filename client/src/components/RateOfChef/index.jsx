import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const RateOfChef = ({ id }) => {
  const [rate, setRate] = useState();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const url = `${process.env.BASE_SERVER_URL}/api/rate/${id}`;
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setRate(data.result);
        }
      } catch (error) {
        setMsg("sorry something went wrong");
      }
    })();
  }, [rate]);

  const stars = Array(5).fill(0);
  return (
    <div className="rated-star-container">
      <div className="rated-star">
        {stars.map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-star ${
              rate > index ? "mouse-in" : "mouse-out"
            }`}
          />
        ))}
      </div>
      <p className="chef-profile-error-msg">{msg}</p>
    </div>
  );
};

RateOfChef.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RateOfChef;
