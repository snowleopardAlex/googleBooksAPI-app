import React from "react";
import './App.css';
import { Container } from "react-bootstrap";

const BookCard = (props) => {

  return (
    <Container>
       <img src={props.image} alt="" />
         <div className="desc mt-3">
             <h5>{props.title}</h5>
             <h6>Author: {props.author}</h6>
             <p>Published Data: {props.published === "0000" ? "Not available": props.published.substring(0,4)}</p>
         </div>
     </Container>
  );
}

export default BookCard;