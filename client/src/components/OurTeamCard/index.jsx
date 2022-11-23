import React from "react";
import PropTypes from "prop-types";
import "./style.css";
const OurTeamCard = ({
  image,
  Name,
  instagram,
  twitter,
  linkedin,
  gitHub,
  motivation,
}) => {
  return (
    <div className="card">
      <img src={image} alt="Person" className="card__image" />
      <p className="card__name">{Name}</p>
      <ul className="social-icons">
        <li>
          <a href={instagram}>
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>
        <li>
          <a href={twitter}>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href={linkedin}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href={gitHub}>
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
      <p className="our-team-motivation">{motivation}</p>
    </div>
  );
};
OurTeamCard.propTypes = {
  image: PropTypes.string,
  Name: PropTypes.string,
  motivation: PropTypes.string,
  gitHub: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
};
export default OurTeamCard;
