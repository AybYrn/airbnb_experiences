import "./App.css";
import React from "react";
import Katie from "./katie.png";
import Bike from "./mountain-bike.png";
import Wedding from "./wedding-photography.png";
import StaticPart from "./StaticPart";
import Cart from "./Card";

export default function App() {
  return (
    <div className="AppContainer">
      <StaticPart />
      <div className="card_container">
        <Cart
          img={Katie}
          rate="5.0"
          searches={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Cart
          img={Wedding}
          rate="5.0"
          searches="30"
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Cart
          img={Bike}
          rate="4.8"
          searches={2}
          country="USA"
          title="Group Mountain Biking"
          price={50}
        />
      </div>
    </div>
  );
}
