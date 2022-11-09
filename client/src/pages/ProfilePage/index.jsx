import React from "react";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RateStar";

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
