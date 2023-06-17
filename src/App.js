import React from 'react';
import './App.css';
import ShopItemClass from './Shop/ShopItemClass';
import item from './data';

function App() {
  return (
    <div className="container">
      <div className="background-element" />
      <div className="highlight-window">
        <div className="highlight-overlay" />
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
