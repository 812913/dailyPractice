import React from "react";
import PropTypes from "prop-types";

function Counter({ counter, increment, decrement, incrementIfOdd, incrementAsync }){
    return (
        <p>Clicked:{counter} times.
            {" "}
            <button onClick={increment}>+</button>
            {" "}
            <button onClick={decrement}>-</button>
            {" "}
            <button onClick={incrementIfOdd}>Increment if Odd</button> 
            {" "}     
            <button onClick={()=>incrementAsync()}>InCrement async</button>                                          
        </p>
    )
}
Counter.propTypes={
    counter:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired
}
export default Counter;