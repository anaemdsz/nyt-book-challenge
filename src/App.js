import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import "./App.css";
import axios from "axios";

const apiKey = process.env.REACT_APP_NYT_BOOKS_KEY;

const axiosInstance = axios.create({
  baseURL: "https://api.nytimes.com",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 429) {
      console.log("Rate limit exceeded. Retrying after 3 seconds...");
      return new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
        axiosInstance(error.config)
      );
    }
    return Promise.reject(error);
  }
);

function App() {
  const [lists, setLists] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetchLists();
    fetchBestSellers();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axiosInstance.get(
        `/svc/books/v3/lists/full-overview?api-key=${apiKey}`
      );
      const listsData = response.data.results.lists;
      setLists(listsData);
    } catch (error) {
      console.error("Error fetching book lists:", error);
    }
  };

  const fetchBestSellers = async () => {
    try {
      const response = await axiosInstance.get(
        `/svc/books/v3/lists/best-sellers/history.json?api-key=${apiKey}`
      );
      const bestSellersData = response.data.results;
      setBestSellers(bestSellersData);
    } catch (error) {
      console.error("Error fetching best sellers:", error);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h2>NYT Best Sellers</h2>
      </header>
      <main className="main-body">
        <div className="book-list-wrapper">
          <h2>Best Sellers</h2>
          <BookList books={bestSellers} />
        </div>
        {lists.map((list) => (
          <div className="book-list-wrapper" key={list.list_id}>
            <h2>{list.list_name}</h2>
            <BookList books={list.books} />
          </div>
        ))}
      </main>
      <footer className="app-footer">
        <a href="https://github.com/anaemdsz/nyt-book-challenge">Github</a>
        <div>-</div>
        <a href="https://developer.nytimes.com/docs/books-product/1/overview">NYT API</a>
      </footer>
    </div>
  );
}

export default App;
