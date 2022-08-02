import React from 'react';
import HeroPart from './HeroPart';
import Navigation from "./Navigation";

export default function StaticPart() {
  return (
    <div className="staticContainer">
        <Navigation />
        <HeroPart />
    </div>
  );
}

