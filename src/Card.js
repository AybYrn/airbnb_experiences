import React from "react";
import Katie from "./katie.png";
import Star from "./Star.svg";

export default function Cart() {
  return (
    <div className="card">
      <img src={Katie} alt="Katie-zafere" className="cardImg"></img>
      <div className="rates">
        <div>
          <img src={Star} alt="Star" className="cardStar"></img>
        </div>
        <div className="country">
          (6)
          <svg
            width="2"
            height="2"
            viewBox="0 0 2 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1" cy="1" r="1" fill="#918E9B" />
          </svg>
          USA
        </div>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span>From $136</span> / person
      </p>
    </div>
  );
}
