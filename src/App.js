import "./App.css";
import React from "react";
import StaticPart from "./StaticPart";
import Cart from "./Card";
import Data from "./Data.js";

export default function App() {
  const cartData = Data.map((data) => (
    <Cart
      key = {data.id}
      {...data}
    />
  ));
  console.log(cartData);
  return (
    <div className="AppContainer">
      <StaticPart />
      <div className="card_container">{cartData}</div>
    </div>
  );
}
