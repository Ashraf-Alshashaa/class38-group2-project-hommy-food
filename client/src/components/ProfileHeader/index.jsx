import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";
import useFetch from "../../hooks/useFetch";

const ProfileHeader = ({ chefData, setChefData }) => {
  const { user } = useContext(AuthContext);
  const { performFetch } = useFetch("/user", (data) =>
    setChefData(data?.result)
  );

  const onChange = async (e) => {
    const token = localStorage.getItem("accessToken");
    performFetch({
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ deliveryType: e.target.value }),
    });
  };

  return (
    <>
      {user?.isChef && user?._id === chefData?._id ? (
        <div className="profile-header-container">
          <section className="delivery-type-section">
            <h3>Select your delivery type</h3>
            <div className="delivery-type-container">
              <div className="profile-inputs">
                <div className="pick-up">
                  <input
                    type="radio"
                    id="pickup"
                    name="delivery-type"
                    value="pickup"
                    checked={chefData?.deliveryType == "pickup"}
                    onChange={onChange}
                  />
                  <label htmlFor="pickup" className="delivery-type-label">
                    PickUp
                  </label>
                </div>
                <div className="delivery-type">
                  <input
                    type="radio"
                    id="delivery"
                    name="delivery-type"
                    value="delivery"
                    checked={chefData?.deliveryType == "delivery"}
                    onChange={onChange}
                  />
                  <label htmlFor="delivery" className="delivery-type-label">
                    Delivery
                  </label>
                </div>
              </div>
            </div>
            <div className="error-message"></div>
          </section>
        </div>
      ) : (
        <div className="profile-header-container">
          <section className="delivery-type-section">
            <h3>
              Delivery type: <span> {chefData?.deliveryType} </span>
            </h3>
          </section>
          <section className="profile-favorite-section">
            {user?._id !== undefined && (
              <div className="profile-favorite-container">
                <h3>Add to favorite</h3>
                <i className="fa-solid fa-heart profile-fa-heart"></i>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

ProfileHeader.propTypes = {
  chefData: PropTypes.object,
  setChefData: PropTypes.func.isRequired,
};

export default ProfileHeader;
