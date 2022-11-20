import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PersonalInfo from "../../components/PersonalInfo";
import ProfileHeader from "../../components/ProfileHeader";
import RateStar from "../../components/RatingStar";
import useFetch from "../../hooks/useFetch";
import CustomerPersonalInfo from "../../components/CustomerPersonalInfo";
import { AuthContext } from "../../contexts/authentication";
import MealList from "../../components/MealList";

const ProfilePage = () => {
  const { id } = useParams();
  const [chefData, setChefData] = useState();
  const { performFetch } = useFetch(`/user/chef/${id}`, (data) =>
    setChefData(data?.result)
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    performFetch();
  }, []);
  if (!user && !chefData?.isChef) {
    navigate("/", { replace: true });
  }
  return (
    <>
      {user?._id !== id || !user || user?.isChef ? (
        <div className="chef-profile-page">
          <ProfileHeader chefData={chefData} setChefData={setChefData} />
          <PersonalInfo id={id} chefData={chefData} setChefData={setChefData} />
          <RateStar id={id} chefData={chefData} setChefData={setChefData} />
          <MealList id={id} />
        </div>
      ) : (
        <CustomerPersonalInfo id={id} />
      )}
    </>
  );
};
export default ProfilePage;
