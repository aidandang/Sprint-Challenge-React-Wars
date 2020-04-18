// Write your Character component here
import React from "react";
// import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const Character = ({ character }) => {

  return (
    <div>
      hello {character.name}
    </div>
  );
};

export default Character;
