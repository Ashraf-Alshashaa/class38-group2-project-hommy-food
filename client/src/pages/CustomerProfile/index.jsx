import React from "react";
import { useParams } from "react-router-dom";
import CustomerPersonalInfo from "../../components/CustomerPersonalInfo";

const CustomerProfile = () => {
  const { id } = useParams();
  const isLoading = false;
  return (
    <div className="chef-profile-page">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CustomerPersonalInfo id={id} />
        </>
      )}
    </div>
  );
};

export default CustomerProfile;
