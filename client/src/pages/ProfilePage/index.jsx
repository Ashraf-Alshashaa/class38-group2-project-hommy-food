import React from "react";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RatingStar";

const ProfilePage = () => {
  const isLoading = false;
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProfileHeader />
          <PersonalInfo />
          <RateStar />
        </>
      )}
    </>
  );
};

export default ProfilePage;
