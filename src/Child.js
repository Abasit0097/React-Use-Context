import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
  return (
    <div>
      Hellow world from child number = {value[0]}
      <button onClick={() => value[1](++value[0])}>Increase Value</button>
      </div>
  );
}

export default Child;