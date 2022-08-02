import React from "react";
import Collage from "./Group.png";

export default function HeroPart() {
  return (
    <div className="heroPart">
      <div className="img">
        <img src={Collage} alt="collage"></img>
      </div>
      <div className="textPart">
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
