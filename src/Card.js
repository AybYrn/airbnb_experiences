import React from "react";
import Katie from "./katie.png";
import Star from "./Star.svg";

export default function Cart() {
  return (
    <div className="card">
      <img src={Katie} alt="Katie-zafere" className="cardImg"></img>
      <div className="card_stats">
        <img src={Star} alt="Star" className="cardStar"></img>
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136 </span>/ person</p>
    </div>
  );
}
