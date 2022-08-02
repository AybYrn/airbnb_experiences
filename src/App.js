import './App.css';
import React from 'react';
import StaticPart from './StaticPart';
import Cart from './Card';

export default function App() {
  return (
    <div className="AppContainer">
      <StaticPart />
      <Cart />
    </div>
  );
}
