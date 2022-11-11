import React from "react";

const EditFrom = () => {
  return (
    <div className="expense-message">
      <div className="popup-container">
        <div className="close-bar">
          <i id="exp-close-x" className="fa-solid fa-x"></i>
          <p className="popup-desc">SUCCESS</p>
        </div>
        <h1 className="success-popup-message-top">Congrats!</h1>
        <h2 className="success-popup-message">
          Your expense has been add it to your list
        </h2>
        <button id="exp-close-btn">Close</button>
      </div>
    </div>
  );
};

export default EditFrom;
