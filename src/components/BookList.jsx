import React, { useRef } from "react";
import Book from "./Book";
import "./BookList.css";

const BookList = (props) => {
  const { books } = props;
  const listRef = useRef(null); // Reference to the book list container

  const scrollStep = 300; // Set the scroll step size here (e.g., 100 pixels)

  const scrollLeft = () => {
    listRef.current.scrollLeft -= scrollStep;
  };

  const scrollRight = () => {
    listRef.current.scrollLeft += scrollStep;
  };
  return (
    <div className="book-list-container">
      <button className="book-list-scroll" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="book-list" ref={listRef}>
        {books.map((book) => (
          <Book key={book.rank} book={book} />
        ))}
      </div>
      <button className="book-list-scroll" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default BookList;
