import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';

function App() {
  let [num, setnum] =useState(33)

  return (
    <div>
      Hellow world from App 
      <button onClick={() => setnum(++num)}> Increase Number</button>
      <Parent number={num}></Parent>
      </div>
  );
}

export default App;
