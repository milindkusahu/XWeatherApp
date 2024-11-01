import React from "react";

const Card = ({ title, temp }) => {
  return (
    <div className="weather-card">
      <h2>{title}</h2>
      <p>{temp}</p>
    </div>
  );
};

export default Card;
