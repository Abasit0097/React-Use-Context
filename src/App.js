import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import ValueContext from './ValueContext';

function App() {
  let value = useState(100);

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
