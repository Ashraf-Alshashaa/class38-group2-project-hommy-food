import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authentication";
import PropTypes from "prop-types";
import InputForm from "../InputForm";
import "./style.css";

const EditFromPopUp = ({ setOpenModal }) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("");
  const id = user._id;
  const [values, setValues] = useState({
    userName: "",
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

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
      name: "firstName",
      type: "text",
      placeholder: "First name",
      label: "First name",
    },
    {
      id: 3,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
    },
    {
      id: 6,
      name: "phone",
      type: "text",
      placeholder: "Phone number",
      label: "Phone number",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.BASE_SERVER_URL}/api/user/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success) {
        setMsg("Your personal information was successfully updated");
      } else {
        setMsg(result.msg);
      }
    } catch (error) {
      setMsg("sorry something went wrong");
    }
  };

  useEffect(() => {
    setData({
      userName: values.userName,
      fullName: { first: values.firstName, last: values.lastName },
      password: values.password,
      address: values.address,
      phone: values.phone,
    });
  }, [values]);

  return (
    <div className="profile-popup-container">
      <div className="personal-popup-field">
        <div className="popup-bar-header">
          <div className="close-bar">
            <p className="popup-desc">Update information</p>
            <button
              className="popup-close-icon-btn"
              onClick={() => setOpenModal(false)}
            >
              <i id="exp-close-x" className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
        <form className="popup-input-field" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <InputForm
              className="update-input-container"
              key={input.id}
              {...input}
              value={user[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="popup-update-message">
            <p>{msg}</p>
          </div>
          <div className="submit-update-container">
            <button id="popup-back-btn" onClick={() => setOpenModal(false)}>
              Back
            </button>
            <button id="popup-close-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
// };

EditFromPopUp.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};

export default EditFromPopUp;
