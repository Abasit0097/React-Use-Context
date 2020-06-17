import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import ValueContext from './ValueContext';
import Child2 from './Child2';

function App() {
  let value = useState(100);

  return (
    <ValueContext.Provider value={value}>
    <div>
      Hellow world from  App trying reducer
      <Parent></Parent>
      <Child2></Child2>
      </div>
      </ValueContext.Provider>
  );
}

export default App;
