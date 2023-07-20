import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    const { book } = this.props;

    return (
      <div id={book.rank} className="entry" data-text={book.description}>
        <div className="book-image">
          {book.book_image ? (
            <img
              src={book.book_image}
              className="cover-image"
              id={"cover-" + book.rank}
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/cover_image.jpg"}              className="cover-image"
              id={"cover-" + book.rank}
            />
          )}
        </div>
        <div className="book-details">
          <h2 className="book-title">
            <a href={book.amazon_product_url} target="_blank" rel="noreferrer">
              {book.rank ? `#${book.rank}: ` : ""} {book.title}
            </a>
          </h2>
          <h4 className="book-author">By {book.author}</h4>
          <h4 className="book-publisher">{book.publisher}</h4>
          <div className="book-stats">
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
