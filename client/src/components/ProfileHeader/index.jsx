import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";

const ProfileHeader = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  // const [deliveryType, setDeliveryType] = useState("pickup");
  const [userInfo, setUserInfo] = useState(user);

  // const onChange = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `${process.env.BASE_SERVER_URL}/api/user/chef/${id}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(deliveryType),
  //       }
  //     );
  //     const res = await response.json();
  //     console.log(res, "res");
  //   } catch (error) {
  //     setMsg("sorry something went wrong");
  //   }
  //   setDeliveryType(e.target.value);
  // };

  const url = `${process.env.BASE_SERVER_URL}/api/user/chef/${id}`;
  useEffect(() => {
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
                    // checked={deliveryType == "pickup"}
                    // onChange={onChange}
                  />
                  <label htmlFor="pickup" className="delivery-label">
                    PickUp
                  </label>
                </div>
                <div className="delivery">
                  <input
                    type="radio"
                    id="delivery"
                    name="delivery-type"
                    value="delivery"
                    // checked={deliveryType == "delivery"}
                    // onChange={onChange}
                  />
                  <label htmlFor="delivery" className="delivery-label">
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
            <h3>Delivery type: {userInfo?.deliveryType === true}</h3>
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
