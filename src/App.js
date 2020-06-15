import React from 'react';
import './App.css';
import Parent from './Parent.js';
import ValueContext from './VaueContext.js';

function App(){
  let value = 100;
  return (
    <ValueContext.Provider value={value}>
    <div>
      Hellow world from App 
      <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
