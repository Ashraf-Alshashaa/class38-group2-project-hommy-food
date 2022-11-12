import React, { useContext, useState } from "react";
// import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import PropTypes from "prop-types";
import avatar from "../../../public/images/img_avatar.png";
import "./style.css";
import RateOfChef from "../RateOfChef";
import EditFromPopUp from "../EditFromPopUp";
import UploadImgWidget from "../UploadImgWidget";
import { useEffect } from "react";

const PersonalInfo = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [msg, setMsg] = useState("");
  const { user } = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState("");
  const [chefInfo, setChefInfo] = useState(user);

  const url = `${process.env.BASE_SERVER_URL}/api/user/chef/${id}`;
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setChefInfo(data.result);
          return;
        }
        throw new Error("Http Error");
      } catch (error) {
        // console.log(error);
        // setMsg("something went wrong");
      }
    })();
  }, [user]);

  useEffect(() => {
    if (imgUrl) {
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
              body: JSON.stringify({ photo: imgUrl }),
            }
          );
          const res = await response.json();
          setChefInfo(res?.result[0]);
        } catch (error) {
          setMsg("sorry something went wrong");
        }
      })();
    }
  }, [imgUrl]);

  return (
    <>
      <div className="personal-info-container">
        <div className="image-container">
          <div className="profile-image">
            {chefInfo?.photo ? (
              <img
                src={chefInfo?.photo}
                alt="user image"
                className="user-profile-img"
              />
            ) : (
              <img src={avatar} alt="user image" className="user-profile-img" />
            )}
          </div>
          {user?._id === id && (
            <>
              <UploadImgWidget
                folderName="profilePicture"
                setImgUrl={setImgUrl}
                className="upload-profile-image"
              />
              <p>{msg}</p>
            </>
          )}
          <div className="rated-star-comp">
            <RateOfChef id={id} />
          </div>
        </div>
        <div className="info-container">
          <div className="profile-info-title">
            <h2>Personal information</h2>
          </div>
          <h3>User name: {chefInfo?.userName}</h3>
          {chefInfo?.fullName ? (
            <>
              <h3>First name: {chefInfo?.fullName.first}</h3>
              <h3>Last name: {chefInfo?.fullName.last}</h3>
            </>
          ) : (
            <>
              <h3>First name:</h3>
              <h3>Last name:</h3>
            </>
          )}
          <h3>e-mail: {chefInfo?.email}</h3>
          <h3>Address: {chefInfo?.address}</h3>
          <h3>Phone number: {chefInfo?.phone}</h3>
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
          <EditFromPopUp
            setOpenModal={setOpenModal}
            setChefInfo={setChefInfo}
          />
        </div>
      ) : null}
    </>
  );
};

PersonalInfo.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PersonalInfo;
