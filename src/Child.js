import React from 'react';

function Child(props) {
  return (
    <div>
<<<<<<< Updated upstream
      Hellow world from child {props.number}
=======
      Hellow world from child Number = {value[0]}
      <button onClick={() => (value[1](++value[0]))}>update value</button>
>>>>>>> Stashed changes
      </div>
  );
}

export default Child;