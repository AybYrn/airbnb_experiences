import React from 'react';
import Navigation from "./Navigation";
import Collage from "./Group.png"

export default function StaticPart() {
  return (
    <div className="staticContainer">
        <Navigation />
        <div className='img'><img src={Collage} alt="collage"></img></div>
    </div>
  );
}

