import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RatingStar";
import useFetch from "../../hooks/useFetch";

const ProfilePage = () => {
  const { id } = useParams();
  const [chefData, setChefData] = useState();
  const { performFetch } = useFetch(`/user/chef/${id}`, (data) =>
    setChefData(data?.result)
  );
  useEffect(() => {
    performFetch();
  }, []);
  const isLoading = false;
  return (
    <div className="chef-profile-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProfileHeader chefData={chefData} setChefData={setChefData} />
          <PersonalInfo id={id} chefData={chefData} setChefData={setChefData} />
          <RateStar id={id} chefData={chefData} setChefData={setChefData} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
