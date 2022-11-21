import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import "./style.css";
import RateOfChef from "../RateOfChef";
import { useNavigate } from "react-router-dom";
import { MsgPopupContext } from "../../contexts/msgPopup";

const FavoriteChefCard = ({ id }) => {
  const [chef, setChef] = useState();
  const navigate = useNavigate();
  const { setPopup } = useContext(MsgPopupContext);
  const { performFetch } = useFetch(`/user/chef/${id}`, (data) =>
    setChef(data?.result)
  );
  //console.log(id);
  //console.log(chef, "chef");
  useEffect(() => {
    performFetch();
  }, []);
  const removeFavorite = () => {
    setPopup({
      type: "error",
      text: `${id}Chef removed from favorite`,
      open: true,
    });
  };
  return (
    <div className="favorite-chef-card-container">
      <i
        className="fa-solid fa-heart-crack"
        data-hover="Remove from favorites"
        onClick={removeFavorite}
      ></i>
      <div
        className="favorite-chef-image-container"
        onClick={() => navigate(`/profile/${id}`)}
      >
        <div className="favorite-chef-profile-image">
          <img
            src={chef?.photo}
            alt="chef image"
            className="favorite-chef-profile-img"
          />
        </div>
        <div className="rated-star-comp">
          <RateOfChef number={chef?.AvgCustomerRates} />
        </div>
      </div>
      <div
        className="favorite-chef-info-container"
        onClick={() => navigate(`/profile/${id}`)}
      >
        <h2>Chef {chef?.userName}</h2>
        <h3>
          e-mail: <span>{chef?.email}</span>
        </h3>
        <h3>
          Address: <span>{chef?.address}</span>
        </h3>
        <h3>
          Phone number: <span>{chef?.phone}</span>
        </h3>
        <h3>
          Service type:{" "}
          <span className="favorite-chef-delivery-type">
            {chef?.deliveryType}
          </span>{" "}
        </h3>
      </div>
    </div>
  );
};

FavoriteChefCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FavoriteChefCard;
