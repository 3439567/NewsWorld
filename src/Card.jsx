import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <h3>No News Found</h3>;
  }

  return (
    <div className="cards-container">
      {data.map((article, index) => (
        <div className="cards" key={index}>
          <img
            src={article.urlToImage || "placeholder.jpg"}
            alt={article.title}
          />
          <h3>{article.title}</h3>
          <p>{article.description || "No description available."}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <button className="button">Read More</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;
