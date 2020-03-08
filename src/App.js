import React, { Component } from "react";
import Navigation from "./components/Navigation";
import RouterApp from "./components/RouterApp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class App extends Component {
  render() {
    return (
      <Container>
        <>
          <Navigation />
        </>
        <Row>
          <RouterApp />
        </Row>
      </Container>
    );
  }
}

export default App;
