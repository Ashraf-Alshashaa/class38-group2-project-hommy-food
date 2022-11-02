import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const SignUpForm = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, errorMessage, ...inputs } = props;

  const handleFocus = () => {
    setFocus(true);
  };
  return (
    <div className="signUp-form">
      <label>{label}</label>
      <input
        {...inputs}
        onChange={onChange}
        onBlur={handleFocus}
        focus={focus.toString()}
      />
      <span>
        <i className="fa-solid fa-triangle-exclamation"></i>
        {errorMessage}
      </span>
    </div>
  );
};
SignUpForm.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SignUpForm;
