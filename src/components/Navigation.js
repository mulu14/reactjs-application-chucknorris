import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Navbar expand="md" bg="primary" variant="dark">
      <Nav variant="tabs" className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/categories">Joke Categories</Nav.Link>
        <Nav.Link href="/search"> Joke Query </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
