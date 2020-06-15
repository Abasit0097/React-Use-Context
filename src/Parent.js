import React from 'react';
import Child from './Child.js';


function Parent(props) {
  return (
    <div>
      Hellow world from Parent 
    <Child number={props.number}></Child>  
      </div>
  );
}

export default Parent;