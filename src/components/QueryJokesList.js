import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function QueryJokesList(props) {
  return (
    <ListGroup>
      {props.result.map(joke => (
        <ListGroup.Item key={joke.id}> {joke.value} </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default QueryJokesList;
