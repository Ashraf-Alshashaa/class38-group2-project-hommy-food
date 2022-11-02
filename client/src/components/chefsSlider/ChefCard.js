import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const ChefCard = ({ chefImage, ratingImg }) => {
  // let { imgSrc, chefName, cusine, rating } = props.data;
  return (
    <div>
      <Card className="p-0 overflow-hidden h-100 shadow">
        <div className="overflow-hidden rounded p-0 bg-light">
          <Card.Img variant="top" src={chefImage} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="display-6">Name</Card.Title>
          <Card.Title className="display-6">Country</Card.Title>
          <Card.Img variant="Body" src={ratingImg} style={{ width: "100px" }} />
        </Card.Body>
        <Button className="w-100 rounded-0" variant="success">
          Visit the chef's profile
        </Button>
      </Card>
    </div>
  );
};

export default ChefCard;
