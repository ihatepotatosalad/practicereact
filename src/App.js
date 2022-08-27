
import Gallery from './components/Gallery';
import './App.css';
import { React, useContext, useEffect, useState } from 'react';

function App() {
  let [count, setCount] = useState(0)
  function add() {
    setCount(count + 1)
  }
  function sub() {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <button onClick={sub}>-</button>
      <h2 title="count">{count}</h2>
      <button onClick={add}>+</button>
      <Gallery />
    </div>
  );
}

export default App;
