import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CategoriesList(props) {
  const randomJoke = (
    <Card>
      <Card.Body> {props.randomJoke} </Card.Body>
    </Card>
  );

  const placeHolder = () => {
    return <p> You will see here randomly selected joke </p>;
  };
  return (
    <>
      <Col xs={4}>
        <Card>
          <ListGroup>
            {props.data.map(item => (
              <ListGroup.Item
                key={item}
                as={Button}
                variant="dark"
                onClick={e => props.get_random_jokes(item, e)}
              >
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>
      <Col xs={8}>{props.randomJoke !== null ? randomJoke : placeHolder()}</Col>
    </>
  );
}

export default CategoriesList;
