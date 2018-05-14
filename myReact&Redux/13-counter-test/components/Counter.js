import React from "react";
import PropTypes from "prop-types";

function Counter({increment,incrementIfOdd,incrementAsync,decrement,counter}){
    return (
        <p>
            Clicked:{counter} times
            {' '}
            <button onClick={increment}>+</button>
            {' '}
            <button onClick={decrement}>-</button>
            {' '}
            <button onClick={incrementIfOdd}>incrementIfOdd</button>
            {' '}
            <button onClick={()=>incrementAsync()}>incrementAsync</button>
        </p>
    )  
}
Counter.propTypes={
    counter:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired
}
export default Counter;