import React, { useContext, useEffect } from "react";
import { MsgPopupContext } from "../../contexts/msgPopup";
import "./style.css";

const MsgPopup = () => {
  const { msg, setMsg } = useContext(MsgPopupContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg({ ...msg, open: false });
    }, 3000);
    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <div
      className={
        msg?.open ? `msg-box ${msg?.type}` : `msg-box ${msg?.type} hidden`
      }
    >
      <h5 className="alert-text">{msg?.text}</h5>
    </div>
  );
};

export default MsgPopup;
