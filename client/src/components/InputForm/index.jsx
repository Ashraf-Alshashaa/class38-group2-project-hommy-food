import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const InputForm = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, errorMessage, className, ...inputs } = props;

  // handel the field focus
  const handleOnBlur = () => {
    setFocus(true);
  };

  return (
    <div className={`signUp-form ${className}`}>
      {label && <label>{label}</label>}

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
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default InputForm;
