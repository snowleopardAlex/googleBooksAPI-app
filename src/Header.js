import React from "react";
import './App.css';
import { Jumbotron, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron fluid style={{backgroundColor: "#FFFDD0"}}>
    <Container>
      <h1>Books</h1>
    </Container>
  </Jumbotron>
  );
  }

export default Header;