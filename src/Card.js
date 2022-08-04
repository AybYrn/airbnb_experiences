import React from "react";
import Star from "./Star.svg";

export default function Cart(props) {

  console.log(props)
  let textbadge

  if (props.openspot === 0){
    textbadge = "SOLD OUT"
  }else if (props.location === "Online"){
    textbadge = "ONLINE"
  }

  return (
    <div className="card">
      {textbadge && <div className="card-badge">{textbadge}</div>}
      {props.img && <img src={`${props.img}`} alt="" className="cardImg"></img>}
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
