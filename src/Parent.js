import React from 'react';
import Child from './Child.js';

<<<<<<< Updated upstream

function Parent(props) {
  return (
    <div>
      Hellow world from Parent 
    <Child number={props.number}></Child>  
=======
function Parent() {

  return (
    <div>
      Hellow world from Parent
    <Child></Child>  
>>>>>>> Stashed changes
      </div>
  );
}

export default Parent;