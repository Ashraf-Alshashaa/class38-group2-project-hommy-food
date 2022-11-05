import React from "react";
import banner from "../../../public/images/New-Banner.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="hero-section">
      <div className="banner-container">
        <img src={banner} alt="banner img" className="banner-img" />
      </div>
      <div className="slogan-section">
        <h3 className="slogan">Do not</h3>
        <h3 className="slogan-eat">Eat</h3>
        <h3 className="slogan-light">light</h3>
        <h3 className="slogan-tasty">tasty</h3>
      </div>
    </div>
  );
};

export default Banner;
