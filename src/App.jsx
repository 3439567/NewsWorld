import React, { useState } from "react";
import "./index.css";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const API_KEY = "c36a4b3b69c1414b9a3a3a3e8abdb6e0";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setNewsData([]);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <a href="/">NewsWorld</a>
        </div>
        <ul className="brand-links">
          <li>
            <a href="#AllNews">All News</a>
          </li>
          <li>
            <a href="#Trending">Trending</a>
          </li>
          <div className="searchbar">
            <input type="text" placeholder="Type here" onChange={handleInput} />
            <button onClick={getData}>Search</button>
          </div>
        </ul>
      </nav>
      <p className="head">Stay Updated with Trendy News!</p>
      <div className="buttons">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setSearch("sports");
            getData("sports");
          }}
        >
          Sports
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setSearch("politics");
            getData("politics");
          }}
        >
          Politics
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setSearch("entertainment");
            getData("entertainment");
          }}
        >
          Entertainment
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setSearch("health");
            getData("health");
          }}
        >
          Health
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setSearch("fitness");
            getData("fitness");
          }}
        >
          Fitness
        </button>
      </div>
      <div>
        <Card data={newsData} />
      </div>
    </>
  );
};

export default App;
