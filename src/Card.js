import React from "react";
import Star from "./Star.svg";

export default function Cart(props) {
  console.log(props);

  return (
    <div className="card">
      <img src={props.img} alt="Katie-zafere" className="cardImg"></img>
      <div className="card_stats">
        <img src={Star} alt="Star" className="cardStar"></img>
        <span>{props.rate}</span>
        <span className="gray">({props.searches}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price} </span>/ person
      </p>
    </div>
  );
}
