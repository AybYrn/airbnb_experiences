import "./App.css";
import React from "react";
import StaticPart from "./StaticPart";
import Cart from "./Card";
import Data from "./Data.js";

export default function App() {
  const cartData = Data.map((data) => (
    <Cart
      img={data.img}
      rate={data.rate}
      searches={data.searches}
      country={data.country}
      title={data.title}
      price={data.price}
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
