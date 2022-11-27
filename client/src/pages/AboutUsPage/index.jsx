import React from "react";
import { useState } from "react";
import coverImg from "../../../public/images/about-us-cover.jpeg";
import { useNavigate } from "react-router-dom";
import OurTeamCard from "../../components/OurTeamCard";
import Feedback from "../../components/Feedback";
import teamMembers from "../../components/OurTeamCard/teamData.js";
import "./style.css";

const AboutUsPage = () => {
  const navigate = useNavigate();
  const [readMore, setReadMore] = useState(false);
  const text = `Did you know there is growing demand in the food delivery business
            for fresh, home cooked food made by skilled cooks in their own
            kitchens? With the right location and local demand, this can be an
            effective way to make extra cash or explore options for a catering
            business. our mission is provide chefs to set schedules for when
            they are active and visible for hungry customers to book orders.
            HommyFood app is the perfect companion for selling
            homemade food online. This app allow you to set up an account, make
            schedules, secure payments, add photos, set prices, and receive
            ratings `;
  return (
    <div className="about-us-page">
      <div className="about-us-page-container">
        <div className="about-us-page-image-section">
          <img src={coverImg} alt="about-us" />
          <div className="about-us-page-read">
            <h1>About Us</h1>
            <p>{readMore ? text : `${text.substring(0, 453)}`}</p>
          </div>
        </div>
        <div className="about-us-order-now-btn">
          <button onClick={() => navigate("/")}>Order Now</button>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "Read more"}
          </button>
        </div>
      </div>
      <div>
        <h1 className="heading-our-team">Our Team</h1>
        <div className="container-ourTeam">
          {teamMembers.map((member) => (
            <OurTeamCard
              key={member.id}
              Name={member.name}
              image={member.image}
              instagram={member.InstagramLink}
              twitter={member.TwitterLink}
              linkedin={member.LinkedinLink}
              gitHub={member.gitHubLink}
            />
          ))}
        </div>
      </div>
      <div className="about-us-page-feedback">
        <div className="contact-us">
          <h3> contact us</h3>
          <div className="contact-info">
            <i className="fa-solid fa-phone"></i>
            <p>+316356709</p>
          </div>
          <div className="contact-info">
            <i className="fa-solid fa-envelope"></i>
            <p>hommyfood38@gmail.com</p>
          </div>
          <div className="contact-info">
            <i className="fa-solid fa-location-dot"></i>
            <p>Overhoeksplien 2,1031KS Amsterdam</p>
          </div>
        </div>
        <div className="give-us-feedback">
          <h3>Give us your opinion</h3>
          <Feedback />
        </div>
      </div>
      <p className="cp-text">
        © Copyright 2022 HommyFood. All rights reserved.
      </p>
    </div>
  );
};
export default AboutUsPage;
