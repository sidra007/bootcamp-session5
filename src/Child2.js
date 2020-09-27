import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer.js';

const Child2 = ()=>{
    let[state,dispatch]=useReducer(CounterReducer,9);
    console.log(state);


    return(

        <div>
            <h1>the value of state is {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>
            increment
            </button>

            <button onClick={()=>dispatch('DECREMENT')}>
            decrement
            </button>
        </div>

    );
}
export default Child2;