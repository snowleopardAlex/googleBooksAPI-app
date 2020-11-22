import React from "react";
import './App.css';
import SearchArea from "./SearchArea";
import BookList from "./BookList";
// Small progressive client-side HTTP request library, and Node.js module with the same API, 
// supporting many high-level HTTP client features.
import request from "superagent";



class Books extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          books: [],
          // the state of the app updates whenever I type into the input box
          searchField: "",
          sort: ""
      }
  }

  // method - 
  searchBook = (e) => {
     // we need to use e.preventDefault to prevent the form of trying to connect to the server which 
     // we don't have, we have googleAPI 
     e.preventDefault(); 
     request
       .get("https://www.googleapis.com/books/v1/volumes")
       .query({ q: this.state.searchField})
       .then((data) => {
           // spreading items into a new array 
           // pass clean data
           const cleanData = this.cleanData(data)
           this.setState({ books: cleanData })
       })
  }

  // method - event - whenever we type into the input box, it fires the event
  handleSearch = (e) => {
     this.setState({ searchField: e.target.value })
  }

  handleSort = (e) => {
      this.setState({ sort: e.target.value })
  }

  // cleaning data in the case we will get displayed incomplete data
  // we make sure data displayed to us has all parameters we wish it to have
  // (data) instead of (e) because this is what we will be passing from the API
  cleanData = (data) => {  
    const cleanedData = data.body.items.map((book) => {
      // hasOwnProperty - a boolean indicating whether or not the object has the specified property as own property. 
      if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
          book.volumeInfo['publishedDate'] = '0000';
      }

      else if(book.volumeInfo.hasOwnProperty('imageLinks') === false) {
          book.volumeInfo['imageLinks'] = { thumbnail: ""}
      }

      return book
    }) 

    return cleanedData;

  }

  render() {
    const sortedBooks = this.state.books.sort((a,b) => {
        if(this.state.sort === "Newest") {
          // parseInt() function parses (analyzes) a string argument and returns an integer of the specifiex radix. 
          // substring - a sequence of characters within a string
            return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
        } 
        
        else if(this.state.sort === "Oldest") {
            return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
        }
    }) 

    return (
        <div>
        <SearchArea 
         searchBook={this.searchBook} 
         handleSearch={this.handleSearch} 
         handleSort={this.handleSort}
         />
        <BookList 
          books={sortedBooks} 
        />
        </div>
    );
  }
}

export default Books;