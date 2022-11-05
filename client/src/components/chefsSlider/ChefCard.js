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
          <Card.Title className="display-8">{chefName}</Card.Title>
          <Card.Title className="display-10">{chefCountry}</Card.Title>
          <Card.Img
            variant="Body"
            src={chefRatingImg}
            style={{ width: "100px" }}
          />
        </Card.Body>
        <Button className="w-100 rounded-0" variant="success">
          Visit the chef profile
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
