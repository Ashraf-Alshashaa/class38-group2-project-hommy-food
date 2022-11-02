import React from "react";
import { useState } from "react";
import SignUpForm from "../../components/SignUpForm";
import "./style.css";
import Logo from "../../../public/images/Login&SignUp-logo.png";

const SignUp = () => {
  const [userType, setUserType] = useState(true);
  // const [data, setData] = useState(null);
  const [values, setValues] = useState({
    userName: "",
    first: "",
    last: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChef: null,
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
      id: 22,
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
      id: 23,
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
      id: 3,
      name: "email",
      type: "email",
      placeholder: "email@example.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
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
      id: 5,
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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Updating the input value
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // setData({
    //   userName: values.userName,
    //   fullName: { first: values.first, last: values.last },
    //   email: values.email,
    //   password: values.password,
    //   isChef: values.isChef,
    // });
  };

  const handleCheckBox = (e) => {
    setUserType(e.target.value);
  };

  return (
    <div className="signUp-page">
      <form onSubmit={handleSubmit}>
        <img src={Logo} width="200px" alt="logo" />
        <h1>Register</h1>
        {inputs.map((input) => (
          <SignUpForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="check-container" >
          {/* <div className="chef-field"> */}
          <input
            type="radio"
            id="chef"
            name="chef"
            value={true}
            checked={userType}
            onChange={handleCheckBox}
          />
          <label className="checker-label">Chef</label>
          {/* </div>
          <div className="user-field"> */}
          <input
            type="radio"
            id="user"
            name="user"
            value={false}
            checked={!userType}
            onChange={handleCheckBox}
          />
          <label className="checker-label">User</label>
          {/* </div> */}
        </div>
        <button className="submit-btn">Submit</button>
        <button className="back-btn">Back</button>
      </form>
    </div>
  );
};

export default SignUp;
