import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const ProfileHeader = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [userInfo, setUserInfo] = useState(user);

  const onChange = async (e) => {
    (async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch(
          `${process.env.BASE_SERVER_URL}/api/user`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ deliveryType: e.target.value }),
          }
        );
        const res = await response.json();
        setUserInfo(res.result[0]);
      } catch (error) {
        setMsg("sorry something went wrong");
      }
    })();
  };

  const url = `${process.env.BASE_SERVER_URL}/api/user/chef/${id}`;
  useEffect(() => {
    if (!user || user?.id !== id) {
      (async () => {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            setUserInfo(data.result);
            return;
          }
          throw new Error("Http Error");
        } catch (error) {
          setMsg("something went wrong");
        }
      })();
    }
  }, [user]);

  return (
    <>
      {user?.isChef && user?._id === id ? (
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
                    checked={userInfo?.deliveryType == "pickup"}
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
                    checked={userInfo?.deliveryType == "delivery"}
                    onChange={onChange}
                  />
                  <label htmlFor="delivery" className="delivery-type-label">
                    Delivery
                  </label>
                </div>
              </div>
            </div>
            <div className="error-message">
              <p>{msg}</p>
            </div>
          </section>
        </div>
      ) : (
        <div className="profile-header-container">
          <section className="delivery-type-section">
            <h3>
              Delivery type: <span> {userInfo?.deliveryType} </span>
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

export default ProfileHeader;
