import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const MemeCard = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card style={{ width: "18rem", height: "33rem", margin: "2rem" }}>
        <Card.Img variant="top" src={props.img} className="mh-100" />
        <Card.Body className="d-flex flex-column align-items-center ">
          <Card.Title>{props.title}</Card.Title>
          <Button
            onClick={(e) => navigate(`/edit?url=${props.img}`)}
            className="position-absolute bottom-0 mb-1"
            variant="primary"
          >
            Editar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
