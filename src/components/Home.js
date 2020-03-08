import React from "react";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Col xs={8}>
      <Jumbotron>
        <h1>Hello, Joke!</h1>
        <p>I can give you some random joke and will not disappointed</p>
        <Button variant="info">
          <Link to="https://api.chucknorris.io/">Learn more</Link>
        </Button>
      </Jumbotron>
    </Col>
  );
}
export default Home;
