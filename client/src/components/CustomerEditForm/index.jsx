import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../InputForm";
import "./style.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const CustomerEdit = ({ trigger, userId, setTrigger }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChef: "user",
  });
  const [msg, setMsg] = useState("");

  // Creating an array of input
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "User name",
      errorMessage:
        "First name should be 3-10 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 2,
      name: "firstName",
      type: "text",
      placeholder: "First name",
      errorMessage: "Non",
      label: "First name",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Last name",
      errorMessage: "Non",
      label: "Last name",
      pattern: "^[A-Za-z0-9]{3,10}$",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Address name",
      errorMessage: "Non",
      label: "Address",
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "email@example.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 6,
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
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 8,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone number",
      errorMessage: "Non",
      label: "Phone number",
    },
  ];

  // Handling the submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.BASE_SERVER_URL}/api/user/:${userId}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success) {
        navigate("/profile", { replace: true });
      } else {
        setMsg(result.msg);
      }
    } catch (error) {
      setMsg("sorry something went wrong");
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
      firstName: values.firstName,
      lastName: values.lastName,
      address: values.address,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
    });
  }, [values]);

  return trigger ? (
    <div className="edit-popup-container">
      <div className="customer-profile-edit-page">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <InputForm
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <p>{msg}</p>
          <button
            className="customer-profile-edit-btn"
            onClick={() => setTrigger(false)}
          >
            Update
          </button>
          <div className="customer-profile-link-btn" to="/profile">
            <button className="back-btn" onClick={() => setTrigger(false)}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

CustomerEdit.propTypes = {
  trigger: PropTypes.bool,
  userId: PropTypes.string,
  setTrigger: PropTypes.func,
};

export default CustomerEdit;
