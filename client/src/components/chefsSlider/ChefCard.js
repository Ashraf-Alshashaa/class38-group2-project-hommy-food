import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ChefCard = ({ chefName, chefImg, chefRating, id }) => {
  return (
    <div>
      <Card className="p-0 overflow-hidden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-light">
          <Card.Img variant="top" src={chefImg} />
        </div>
        <Card.Body className="top-chef-card-body-container text-center">
          <Card.Title className="slider-chef-name display-14">
            {chefName}
          </Card.Title>
          <h2>{chefRating}</h2>
        </Card.Body>
        <Button
          className="visit-chef-btn w-100 rounded-0 center-children"
          variant="success"
        >
          <Link
            to={`/profile/${id}`}
            className="visit-chef-text center-children"
          >
            Visit the chef profile
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
