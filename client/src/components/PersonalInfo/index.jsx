import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import avatar from "../../../public/images/img_avatar.png";
import "./style.css";
import RatedStar from "../RatedStar";
import EditFromPopUp from "../EditFromPopUp";
import UploadImgWidget from "../UploadImgWidget";
import { useEffect } from "react";

const PersonalInfo = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState("");
  const [userInfo, setUserInfo] = useState(user);

  // console.log(user);
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
        // console.log(error);
        // setMsg("something went wrong");
      }
    })();
  }, [user, imgUrl]);

  return (
    <>
      <div className="personal-info-container">
        <div className="image-container">
          <div className="profile-image">
            {userInfo?.image ? (
              <img src={avatar} alt="user image" className="user-profile-img" />
            ) : (
              <img src={imgUrl} alt="user image" className="user-profile-img" />
            )}
          </div>
          {user?._id === id && (
            <>
              <UploadImgWidget
                folderName="profilePicture"
                setImgUrl={setImgUrl}
                className="upload-profile-image"
              />
            </>
          )}
          <div className="rated-star-comp">
            <RatedStar />
          </div>
        </div>
        <div className="info-container">
          <div className="profile-info-title">
            <h2>Personal information</h2>
          </div>
          <h3>User name: {userInfo?.userName}</h3>
          {userInfo?.fullName ? (
            <>
              <h3>First name: {userInfo?.fullName.first}</h3>
              <h3>Last name: {userInfo?.fullName.last}</h3>
            </>
          ) : (
            <>
              <h3>First name:</h3>
              <h3>Last name:</h3>
            </>
          )}
          <h3>e-mail: {userInfo?.email}</h3>
          <h3>Address: {userInfo?.address}</h3>
          <h3>Phone number: {userInfo?.phone}</h3>
          {user?._id === id && (
            <>
              <button
                className="edit-profile-info"
                onClick={() => setOpenModal(true)}
              >
                <i className="fa-solid fa-pen" /> <h3>Edit profile</h3>
              </button>
            </>
          )}
        </div>
      </div>
      {openModal ? (
        <div className="update-profile-popup-container">
          <EditFromPopUp setOpenModal={setOpenModal} />
        </div>
      ) : null}
    </>
  );
};

export default PersonalInfo;
