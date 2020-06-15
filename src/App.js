import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';

<<<<<<< Updated upstream
function App() {
  let [num, setnum] =useState(33)

=======
function App(){
  let value = useState(100);
>>>>>>> Stashed changes
  return (
    <div>
<<<<<<< Updated upstream
      Hellow world from App 
      <button onClick={() => setnum(++num)}> Increase Number</button>
      <Parent number={num}></Parent>
=======
      Hellow world from App
      <Parent></Parent>
>>>>>>> Stashed changes
      </div>
  );
}

export default App;
