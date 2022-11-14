import React, { useContext, useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";
import useFetch from "../../hooks/useFetch";
import PulseLoader from "react-spinners/PulseLoader";
// import somethingWentWrong from "./something-went-wrong.png";

const RateStar = ({ id }) => {
  const [currentRateValue, setCurrentRateValue] = useState(0);
  const [previousRate, setPreviousRate] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [chefData, setChefData] = useState(null);
  const [msg, setMsg] = useState("");
  const { user } = useContext(AuthContext);
  const { isLoading, performFetch } = useFetch(`/user/chef/${id}`, setChefData);

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

  // Adding a rate to the chef profile
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
          setMsg("sorry something went wrong");
        }
      })();
    }
  }, [currentRateValue]);

  // Get chef data when the rating value changing
  useEffect(() => {
    if (!user || user?.id !== id) {
      performFetch();
    }
  }, [currentRateValue]);

  // Get chef data if there is a rate before and updating the current rate value
  useEffect(() => {
    if (chefData) {
      const filterCustomer = chefData?.result?.customerRates;
      const resultRate = filterCustomer.filter(
        (element) => element.customerId === user?._id
      );
      const filtered = resultRate.map((element) => element.rate);
      setPreviousRate(filtered[0]);
    }
  }, [chefData]);

  const stars = Array(5).fill(0);
  return (
    <>
      {isLoading && (
        <div className="loading-gif">
          <PulseLoader
            color="#f9a01b"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {/* {error && (
        <div className="error">
          <img src={somethingWentWrong} alt="something went wrong" />
          <h1>Oops!</h1>
          <h5>Something went wrong try again or refresh page</h5>
        </div>
      )} */}
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
          </div>
          <p className="chef-profile-error-msg">{msg}</p>
        </div>
      )}
    </>
  );
};

RateStar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RateStar;
