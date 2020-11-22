import React from "react";
import './App.css';
import { Form, Button } from "react-bootstrap";

const SearchArea = (props) => {
  return (
    <div className="search-area">
       <Form onSubmit={props.searchBook} className="mx-auto d-block" style={{maxWidth: "30%"}}>
       <Form.Control onChange={props.handleSearch} placeholder="Type..." />
       <Button className="mt-2" variant="dark" type="submit">
        Submit
       </Button>
       <Form.Control className="mt-2 mb-5" as="select" custom onChange={props.handleSort}>
        <option value="0">Sort...</option>
         <option value="Newest">Newest</option>
         <option value="Oldest">Oldest</option>
       </Form.Control>
       </Form>
    </div>
  );
}

export default SearchArea;