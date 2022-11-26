import React, { useRef, useContext } from "react";
import emailjs from "@emailjs/browser";
import { MsgPopupContext } from "../../contexts/msgPopup";
import "./style.css";
const Feedback = () => {
  const { setPopup } = useContext(MsgPopupContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      );
      setPopup({
        type: "success",
        text: "you message send successfully",
        open: true,
      });
    } catch (error) {
      setPopup({ type: "error", text: "something went wrong", open: true });
    }
  };

  return (
    <form className="form-group" ref={form} onSubmit={sendEmail}>
      <label> Your Name</label>
      <input type="text" name="user_name" />
      <label> Your Email</label>
      <input type="email" name="user_email" />
      <label> Your Message</label>
      <textarea name="message" />
      <button className="submit-btn-feedback">Submit</button>
    </form>
  );
};
export default Feedback;
