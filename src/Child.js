import React, { useContext } from 'react';
import ValueContext from './VaueContext.js';

function Child() {
  let value = useContext(ValueContext);
  return (
    <div>
      Hellow world from child Number = {value}
      </div>
  );
}

export default Child;