import React, { Component } from "react";
import Book from "./Book";
import "./BookList.css";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef(); // Reference to the book list container
    this.scrollStep = 300; // Set the scroll step size here (e.g., 100 pixels)
  }

  scrollLeft = () => {
    this.listRef.current.scrollLeft -= this.scrollStep;
  };

  scrollRight = () => {
    this.listRef.current.scrollLeft += this.scrollStep;
  };

  render() {
    const { books } = this.props;

    return (
      <div className="book-list-container">
        <button className="book-list-scroll" onClick={this.scrollLeft}>
          &lt;
        </button>
        <div className="book-list" ref={this.listRef}>
          {books.map((book) => (
            <Book key={book.rank} book={book} />
          ))}
        </div>
        <button className="book-list-scroll" onClick={this.scrollRight}>
          &gt;
        </button>
      </div>
    );
  }
}

export default BookList;
