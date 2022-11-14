import React from "react";
import { useContext, useState } from "react";
import "./style.css";
import { AuthContext } from "../../contexts/authentication";
import userImg from "../../../public/images/img_avatar.png";
import CustomerEditForm from "../CustomerEditForm";
// import UploadImgWidget from "../UploadImgWidget";

const CustomerInfoBox = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { user } = useContext(AuthContext);
  const userId = user?._id.toString();
  return (
    <>
      {user?.isChef ? (
        ""
      ) : !buttonPopup ? (
        <div className="customer-profile-container">
          <div>
            <h2 className="customer-profile-titles">
              Personal user information
            </h2>
            <div className="customer-img-container">
              <img className="customer-img" src={userImg} />
              {/* <UploadImgWidget /> */}
            </div>
            <div className="customer-info-container">
              <div>
                <p>User name: {user?.userName}</p>
              </div>
              <div>
                <p>Email: {user?.email} </p>
              </div>
              <div>
                <p>First name: </p>
              </div>
              <div>
                <p>Last name:</p>
              </div>
              <div>
                <p>Address:</p>
              </div>
              <div>
                <p>Phone number:</p>
              </div>
              <button
                className="customer-info-updater-btn"
                onClick={() => setButtonPopup(true)}
              >
                Update my information
              </button>
            </div>
          </div>
          <div className="last-orders-container">
            <h2 className="customer-profile-titles">Last orders</h2>
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
