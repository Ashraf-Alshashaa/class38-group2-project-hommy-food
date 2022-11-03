import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../../../public/images/login-logo.png";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const loginInfo = { email: email, password: password };

  const url = `${process.env.BASE_SERVER_URL}/api/user/login`;
  const postLoginInfo = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const data = await response.json();
      if (response.ok) {
        const { isChef, accessToken } = data;
        localStorage.setItem("accessToken", `${accessToken}`);
        setIsLogin(true);
        isChef && navigate("/chefs/my-meals", { replace: true });
        !isChef && navigate("/", { replace: true });
        window.location.reload(false);
        return;
      }
      setMsg(data.msg);
    } catch (error) {
      setMsg("something went wrong");
    }
  };

  return (
    <section className="login-container">
      <img src={loginLogo} alt="Hommy food" className="login-logo" />
      <form className="login-form">
        <label>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <div className="msg-container">
        <p>{msg}</p>
      </div>
      <button onClick={async () => await postLoginInfo()} className="login-btn">
        Login
      </button>
      <div className="register-link-container center-children">
        <Link to={"/register"} className="register-link">
          Register
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
