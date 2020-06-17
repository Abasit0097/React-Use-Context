import React, { useReducer} from 'react'
import numberReducer from './numberReducer';

function Child2 () {
    let [state, dispatch] = useReducer(numberReducer,30)

    function Plus () {
        dispatch({type:"INCREMENT"})
    }
    
    return (
        <div>
            hellow world fom child 2 number = {state}
            <button onClick={Plus}>Increase</button>
            <button onClick={() => {dispatch({type:"DECREMENT"})}}>Decrease</button>
        </div>
    )
}
export default Child2;