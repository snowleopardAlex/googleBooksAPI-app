import React from "react";
import './App.css';
import BookCard from "./BookCard";
import { Card } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Card style={{border: "transparent"}}>
        <Card.Body>
           {
             // i = key value, it can be id
             props.books.map((book, i) => {
               return <BookCard 
                 key={i}
                 image={book.volumeInfo.imageLinks.thumbnail}
                 title={book.volumeInfo.title}
                 author={book.volumeInfo.authors}
                 published={book.volumeInfo.publishedDate}

               />
             })
           }
        </Card.Body>
    </Card>
  );
}

export default BookList;