import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication";
import avatar from "../../../public/images/img_avatar.png";
import "./style.css";
import RatedStar from "../RatedStar";
import UploadImgWidget from "../UploadImgWidget";
import { useEffect } from "react";

const PersonalInfo = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  // const id = "636cfa4b279773035cd02f73"

  const [imgUrl, setImgUrl] = useState("");
  const [userInfo, setUserInfo] = useState(user);

  const url = `${process.env.BASE_SERVER_URL}/api/user/chef/${id}`;
  useEffect(() => {
    // if (!user || (user && user._id !== id)) {
    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setUserInfo(data.result);
          return;
        }
        throw new Error("Http Error");
      } catch (error) {
        // console.log(error);
        // setMsg("something went wrong");
      }
    })();
    // }
  }, []);

  // if (userInfo || userInfo === null) {
  return (
    <div className="personal-ino-container">
      <div className="image-container">
        <div className="profile-image">
          {userInfo?.image ? (
            <img src={avatar} alt="user image" className="user-profile-img" />
          ) : (
            <img src={imgUrl} alt="user image" className="user-profile-img" />
          )}
        </div>
        {user?._id === id && (
          <div className="image-icon">
            <UploadImgWidget
              folderName="profilePicture"
              setImgUrl={setImgUrl}
              className="upload-profile-image"
            />
          </div>
        )}
        <div className="rated-star-comp">
          <RatedStar />
        </div>
      </div>
      <div className="info-container">
        <h2>Personal information</h2>
        <h3>User name: {userInfo?.userName}</h3>
        {userInfo?.fullName ? (
          <h3>
            Full name: {userInfo?.fullName.first} {userInfo?.fullName.last}
          </h3>
        ) : (
          <h3>Full name:</h3>
        )}
        <h3>e-mail: {userInfo?.email}</h3>
        <h3>Address: {userInfo?.address}</h3>
        <h3>Phone number: {userInfo?.phone}</h3>
        {user?._id === id && (
          <Link className="edit-profile-info" to={"/"}>
            <i className="fa-solid fa-pen" /> <h3>Edit profile</h3>
          </Link>
        )}
      </div>
    </div>
  );
};
// };

export default PersonalInfo;
