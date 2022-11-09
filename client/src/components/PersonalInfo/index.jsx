import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import avatar from "../../../public/images/img_avatar.png";
import "./style.css";

const PersonalInfo = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div className="personal-ino-container">
      <div className="image-container">
        <div className="profile-image">
          {user?.image ? (
            <img
              src={user?.image}
              alt="user image"
              className="user-profile-img"
            />
          ) : (
            <img src={avatar} alt="user image" className="user-profile-img" />
          )}
        </div>
        <Link className="image-icon" to={"/"}>
          <i className="fa-solid fa-camera" /> <h3>Add image</h3>
        </Link>
      </div>
      {user && (
        <div className="info-container">
          <h2>Personal info</h2>
          <h3>User name: {user?.userName}</h3>
          {user.fullName ? (
            <h3>
              Full name: {user?.fullName.first} {user?.fullName.last}{" "}
            </h3>
          ) : (
            <h3>Full name:</h3>
          )}
          <h3>E-mail: {user?.email}</h3>
          <h3>Address: {user?.address}</h3>
          {user.phone ? <h3>Phone: {user?.phone}</h3> : <h3>Phone:</h3>}
          <Link className="edit-info" to={"/"}>
            <i className="fa-solid fa-pen" /> <h3>Edit profile</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
