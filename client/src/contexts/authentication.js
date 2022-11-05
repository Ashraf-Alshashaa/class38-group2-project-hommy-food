import React, { createContext, useEffect, useState } from "react";
import fetchUserData from "../hooks/useFetchUser";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("accessToken");
    return token;
  });

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
