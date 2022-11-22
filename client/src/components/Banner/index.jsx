import React from "react";
import chefImage from "../../../public/images/hommy-chef.png";
import banner from "../../../public/images/wood.png";
import slogan from "../../../public/images/new-slogan-01.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="hero-section">
      <div className="banner-container">
        <img src={banner} alt="banner img" className="banner-img" />
        <img src={chefImage} alt="banner img" className="chef-img" />
        <div className="slogan-container">
          <img src={slogan} alt="slogan img" className="slogan" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
