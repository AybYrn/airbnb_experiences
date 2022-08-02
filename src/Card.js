import React from "react";
import Star from "./Star.svg";

export default function Cart(props) {
  console.log(props);

  return (
    <div className="card">
      {props.img && <img src={props.img} alt="Katie-zafere" className="cardImg"></img>}
      <div className="card_stats">
      <img src={Star} alt="Star" className="cardStar"></img>
       {props.rate && <span>{props.rate}</span>}
       {props.searches && <span className="gray">({props.searches}) • </span>}
        {props.country && <span className="gray">{props.country}</span>}
      </div>
      { props.title && <p>{props.title}</p>}
     { props.price &&<p>
        <span className="bold">From ${props.price} </span>/ person
      </p>}
    </div>
  );
}
