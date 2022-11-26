import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RateOfChef from "../RateOfChef";

const ChefCard = ({ chefName, chefImg, chefRating, id }) => {
  return (
    <div>
      <Card className="p-0 overflow-hidden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-light top-10-chef-img-container center-children">
          <Card.Img variant="top" src={chefImg} />
        </div>
        <Card.Body className="top-chef-card-body-container text-center py-2">
          <Card.Title className="slider-chef-name center-children">
            {chefName}
          </Card.Title>
          <RateOfChef number={chefRating} />
        </Card.Body>
        <Button
          className="visit-chef-btn w-100 rounded-0 center-children"
          variant="success"
        >
          <Link
            to={`/profile/${id}`}
            className="visit-chef-text center-children"
          >
            {chefName} profile
          </Link>
        </Button>
      </Card>
    </div>
  );
};

ChefCard.propTypes = {
  chefName: PropTypes.string.isRequired,
  chefImg: PropTypes.string.isRequired,
  chefRating: PropTypes.number,
  id: PropTypes.string.isRequired,
};
export default ChefCard;
