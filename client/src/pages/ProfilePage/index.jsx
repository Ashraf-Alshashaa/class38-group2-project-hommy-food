import React from "react";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RatingStar";

const ProfilePage = () => {
  const isLoading = false;
  return (
    <div className="chef-profile-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProfileHeader />
          <PersonalInfo />
          <RateStar />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
