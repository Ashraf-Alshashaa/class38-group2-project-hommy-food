import React from "react";
import { useContext, useState } from "react";
import "./style.css";
import { AuthContext } from "../../contexts/authentication";
import userImg from "../../../public/images/img_avatar.png";
import CustomerEditForm from "../CustomerEditForm";

const CustomerInfoBox = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { user } = useContext(AuthContext);
  const userId = user?._id.toString();
  return (
    <>
      {user?.isChef ? (
        ""
      ) : !buttonPopup ? (
        <div className="customer-info-container">
          <div className="customer-img-container">
            <img className="customer-img" src={userImg} />
            <button className="customer-img-updater-btn">
              Update profile picture
            </button>
          </div>
          <div>
            <h2 className="customer-info-title">Personal user information</h2>
            <div>User ID: {userId}</div>
            <div>User name: {user?.userName}</div>
            <div>Email: {user?.email}</div>
            <div>First name: </div>
            <div>Last name: </div>
            <div>Phone number: </div>
            <div>Last 5 orders: </div>
            <button
              className="customer-info-updater-btn"
              onClick={() => setButtonPopup(true)}
            >
              Update my info
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <CustomerEditForm
        trigger={buttonPopup}
        userId={userId}
        setTrigger={setButtonPopup}
      />
    </>
  );
};

export default CustomerInfoBox;
