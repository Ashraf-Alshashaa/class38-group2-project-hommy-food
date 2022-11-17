import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MsgPopupContext = createContext();

export const MsgPopupProvider = ({ children }) => {
  const [msg, setMsg] = useState({ type: "", text: "", open: false });
  return (
    <MsgPopupContext.Provider value={{ setMsg, msg }}>
      {children}
    </MsgPopupContext.Provider>
  );
};

MsgPopupProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
