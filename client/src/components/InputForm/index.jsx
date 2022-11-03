import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const InputForm = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, errorMessage, ...inputs } = props;

  const handleOnBlur = () => {
    setFocus(true);
  };
  return (
    <div className="signUp-form">
      <label>{label}</label>
      <input
        {...inputs}
        onChange={onChange}
        onBlur={handleOnBlur}
        focus={focus.toString()}
      />
      <span>
        <i className="fa-solid fa-triangle-exclamation"></i>
        {errorMessage}
      </span>
    </div>
  );
};
InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
