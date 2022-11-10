import React from "react";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RatingStar";

const ProfilePage = () => {
  return (
    <>
      <ProfileHeader />
      <PersonalInfo />
      <RateStar />
    </>
  );
};

export default ProfilePage;
