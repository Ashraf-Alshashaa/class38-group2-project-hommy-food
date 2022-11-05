import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ChefCard = ({ chefName, chefCountry, chefImg, chefRatingImg }) => {
  return (
    <div>
      <Card className="p-0 overflow-hidden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-light">
          <Card.Img variant="top" src={chefImg} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="slider-chef-name display-14">
            {chefName}
          </Card.Title>
          <Card.Title className="slider-chef-country display-16">
            {chefCountry}
          </Card.Title>
          <Card.Img
            variant="Body"
            src={chefRatingImg}
            style={{ width: "50px" }}
          />
        </Card.Body>
        <Button className="visit-chef-btn w-100 rounded-0" variant="success">
          <p className="visit-chef-text">Visit the chef profile</p>
        </Button>
      </Card>
    </div>
  );
};

ChefCard.propTypes = {
  chefName: PropTypes.string.isRequired,
  chefCountry: PropTypes.string.isRequired,
  chefImg: PropTypes.string.isRequired,
  chefRatingImg: PropTypes.string.isRequired,
};
export default ChefCard;
