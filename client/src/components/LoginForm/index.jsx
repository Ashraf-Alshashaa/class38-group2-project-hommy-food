import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginLogo from "../../../public/images/login-logo.png";
import { AuthContext } from "../../contexts/authentication";
import "./style.css";
import postLoginInfo from "../../hooks/postLoginInfo";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [onClick, setOnClick] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const loginInfo = { email: email, password: password };
  const url = `${process.env.BASE_SERVER_URL}/api/user/login`;

  useEffect(() => {
    (async () => {
      if (onClick) {
        try {
          const response = await postLoginInfo(url, loginInfo);
          if (response.success) {
            const { user, accessToken } = response;
            localStorage.setItem("accessToken", `${accessToken}`);
            setUser(user);
            user.isChef && navigate("/chefs/my-meals", { replace: true });
            !user.isChef && navigate("/", { replace: true });
          } else {
            setMsg(response.msg);
          }
        } catch (error) {
          setMsg("something went wrong");
        }
      }
    })();
    setOnClick(false);
  }, [onClick]);

  return (
    <section className="login-container">
      <img src={loginLogo} alt="Hommy food" className="login-logo" />
      <form className="login-form">
        <label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
      <div className="msg-container">
        <p>{msg}</p>
      </div>
      <button onClick={() => setOnClick(true)} className="login-btn">
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
