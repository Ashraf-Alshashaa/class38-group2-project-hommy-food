import React, { createContext, useEffect, useState } from "react";
import fetchUserData from "../hooks/useFetchUser";
import PropTypes from "prop-types";
// import useFetch from "../hooks/useFetch";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("accessToken");
    return token;
  });

  //-----------------------
  // const { performFetch } = useFetch("user", setUser, token);
  // console.log(user, "data");

  // useEffect(() => {
  //   if (token) {
  //     performFetch();
  //   }
  // }, []);
  //
  // const { data } = fetchUserData(token, url);
  //------------------------

  const url = `${process.env.BASE_SERVER_URL}/api/user`;

  useEffect(() => {
    (async () => {
      if (token) {
        const userData = await fetchUserData(token, url);
        if (userData.success) {
          const { user } = userData;
          setUser(user);
        }
      }
    })();
  }, []);

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        logout: logout,
        setUser: setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
