import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import "./style.css";
import Logo from "../../../public/images/Login&SignUp-logo.png";
import { useEffect } from "react";

const SignUp = () => {
  const [data, setData] = useState(null);
  const [values, setValues] = useState({
    userName: "",
    first: "",
    last: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChef: "user",
  });

  // Creating an array of input
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User name",
      errorMessage:
        "First name should be 3-10 characters and shouldn't include any special character!",
      label: "User name",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 2,
      name: "first",
      type: "text",
      placeholder: "first name",
      errorMessage:
        "Last name should be 3-10 characters and shouldn't include any special character!",
      label: "First name",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 3,
      name: "last",
      type: "text",
      placeholder: "last name",
      errorMessage:
        "Last name should be 3-10 characters and shouldn't include any special character!",
      label: "Last name",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "email@example.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at lest 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  // Handling the submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.BASE_SERVER_URL}/api/user/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await response.json();
    } catch (error) {
      alert("error");
    }
  };

  // Getting the input value
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // update data for server
  useEffect(() => {
    setData({
      userName: values.userName,
      fullName: { first: values.first, last: values.last },
      email: values.email,
      password: values.password,
      isChef: values.isChef === "chef",
    });
  }, [values]);

  return (
    <div className="signUp-page">
      <form onSubmit={handleSubmit}>
        <img src={Logo} width="200px" alt="logo" />
        <h1>Register</h1>
        {inputs.map((input) => (
          <InputForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="check-container">
          <div className="chef-field">
            <input
              type="radio"
              id="chef"
              name="isChef"
              value="chef"
              checked={values.isChef == "chef"}
              onChange={onChange}
            />
            <label htmlFor="chef" className="checker-label">
              Chef
            </label>
          </div>
          <div className="user-field">
            <input
              type="radio"
              id="user"
              name="isChef"
              value="user"
              checked={values.isChef == "user"}
              onChange={onChange}
            />
            <label htmlFor="user" className="checker-label">
              User
            </label>
          </div>
        </div>
        <button className="submit-btn">Submit</button>
        <Link className="link-btn" to="/login">
          <button className="back-btn">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
