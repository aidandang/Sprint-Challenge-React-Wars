// Write your Character component here
import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Col } from "reactstrap";

const Character = ({character}) => {
  return (
    <Col xs="12" md="6" lg="3" className="my-2">
      <Card>
        <CardImg top src={character.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{character.name}</CardTitle>
          <CardText className="fixed-height">Status: {character.status}</CardText>
          <CardText className="fixed-height">Species: {character.species}</CardText>
          <CardText className="fixed-height">Gender: {character.gender}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Character;
