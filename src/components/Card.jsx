import React from "react";
import style from "./Card.module.css";

const Card = ({ title, temp }) => {
  return (
    <div className={style.card}>
      <h2>{title}</h2>
      <p>{temp}</p>
    </div>
  );
};

export default Card;
