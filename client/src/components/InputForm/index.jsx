import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const InputForm = (props) => {
  const [focus, setFocus] = useState(false);
  const { onChange, errorMessage, ...inputs } = props;

  // handel the field focus
  const handleOnBlur = () => {
    setFocus(true);
  };
  return (
    <div className="signUp-form">
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
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
