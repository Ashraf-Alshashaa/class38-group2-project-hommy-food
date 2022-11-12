import React from "react";
import { useParams } from "react-router-dom";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RatingStar";

const ProfilePage = () => {
  const { id } = useParams();
  const isLoading = false;
  return (
    <div className="chef-profile-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProfileHeader />
          <PersonalInfo id={id} />
          <RateStar />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
