import React, { useContext, useEffect } from "react";
import { MsgPopupContext } from "../../contexts/msgPopup";
import "./style.css";

const MsgPopup = () => {
  const { popup, setPopup } = useContext(MsgPopupContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup({ ...popup, open: false });
    }, 3000);
    return () => clearTimeout(timer);
  }, [popup]);

  return (
    <div
      className={
        popup?.open ? `msg-box ${popup?.type}` : `msg-box ${popup?.type} hidden`
      }
    >
      <h5 className="alert-text">{popup?.text}</h5>
    </div>
  );
};

export default MsgPopup;
