import React, { Component } from "react";
import './Book.css'

class Book extends Component {
  render() {
    const { book } = this.props;
    var weeksOnList = book.weeks_on_list || "New this week";

    return (
      <div
        id={book.rank}
        className="entry"
        data-text={book.description}
      >
        <div className="book-image">
          {book.book_image ? (
            <img
              src={book.book_image}
              className="cover-image"
              id={"cover-" + book.rank}
              alt={"Cover for " + book.title}
            />
          ) : (
            <img
              src="../../public/cover_image.jpg"
              className="cover-image"
              id={"cover-" + book.rank}
              alt={"Cover for " + book.title}
            />
          )}
        </div>
        <div className="book-details">
          <h2 className="book-title">
            <a
              href={book.amazon_product_url}
              target="_blank"
              rel="noreferrer"
            >
              #{book.rank}: {book.title}
            </a>
          </h2>
          <h4 className="book-author">By {book.author}</h4>
          <h4 className="book-publisher">{book.publisher}</h4>
          <div className="book-stats">
            {/* <p>Last Week: {lastWeekRank}</p> */}
            <p>Weeks on list: {weeksOnList}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
