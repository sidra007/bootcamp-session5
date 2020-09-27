import React, { useContext } from 'react';
import Counter from './Counter.js';

const Child =()=>{
let countvalue=useContext(Counter);

  
    return(
        <div>
            <h1>the value is {countvalue[0]} </h1>
            <button onClick ={()=>{countvalue[1](++countvalue[0])}}>
                start
            </button>
        </div>
    );
}
export default Child;