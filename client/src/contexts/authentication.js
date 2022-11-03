/* eslint react/prop-types: 0 */
import React, { createContext, useEffect, useState } from "react";
import fetchUserData from "../hooks/useFetchUser";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("accessToken");
    return token;
  });

  useEffect(async () => {
    const url = `${process.env.BASE_SERVER_URL}/api/user`;

    if (token) {
      const userData = await fetchUserData(token, url);
      if (userData.success) {
        setUser(userData.user);
        setIsLogin(true);
      }
    }
  }, []);

  const logout = () => {
    setToken(null);
    setIsLogin(false);
    setUser(null);
    localStorage.removeItem("accessToken");
    window.location.reload(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        logout: logout,
        isLogin: isLogin,
        setIsLogin: setIsLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
