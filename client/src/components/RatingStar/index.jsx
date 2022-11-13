import React, { useContext, useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const RateStar = ({ id }) => {
  const [currentRateValue, setCurrentRateValue] = useState(0);
  const [previousRate, setPreviousRate] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [msg, setMsg] = useState("");
  const { user } = useContext(AuthContext);

  const handleClick = (value) => {
    setPreviousRate(currentRateValue);
    setCurrentRateValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  useEffect(() => {
    if (currentRateValue) {
      (async () => {
        const token = localStorage.getItem("accessToken");
        try {
          const response = await fetch(
            `${process.env.BASE_SERVER_URL}/api/rate`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                rate: currentRateValue,
                chefId: id,
              }),
            }
          );
          if (response.ok) {
            await response.json();
            return;
          }
          throw new Error("Http Error");
        } catch (error) {
          setMsg("something went wrong");
        }
      })();
    }
  }, [currentRateValue]);

  useEffect(() => {
    if (!user || user?.id !== id) {
      (async () => {
        try {
          const response = await fetch(
            `${process.env.BASE_SERVER_URL}/api/user/chef/${id}`
          );
          if (response.ok) {
            const data = await response.json();
            const filterCustomer = data.result.customerRates;
            const resultRate = filterCustomer.filter(
              (element) => element.customerId === user?._id
            );
            const filtered = resultRate.map((element) => element.rate);
            setPreviousRate(filtered[0]);
            return;
          }
          throw new Error("Http Error");
        } catch (error) {
          setMsg("something went wrong");
        }
      })();
    }
  }, [user, currentRateValue, previousRate]);

  const stars = Array(5).fill(0);
  return (
    <>
      {(user?.isChef && user?._id === id) || user?._id === undefined ? (
        <></>
      ) : (
        <div className="star-container">
          <h3>Rate the chef</h3>
          <div className="star">
            {stars.map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${
                  (hoverValue || currentRateValue || previousRate) > index
                    ? "mouse-in"
                    : "mouse-out"
                }`}
                onClick={() => handleClick(index + 1)}
                onMouseEnter={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            <span>{msg}</span>
          </div>
        </div>
      )}
    </>
  );
};

RateStar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RateStar;
