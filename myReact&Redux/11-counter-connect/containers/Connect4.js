import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {increment,decrement,incrementIfOdd,incrementAsync} from "../actions/index";

function Counter({counter,dispatch}){
    return (
        <p>Clicked:{counter} times.
            {" "}
            <button onClick={()=>dispatch(increment())}>+</button>
            {" "}
            <button onClick={()=>dispatch(decrement())}>-</button>
            {" "}
            <button onClick={()=>dispatch(incrementIfOdd())}>Increment if Odd</button> 
            {" "}     
            <button onClick={()=>dispatch(incrementAsync())}>InCrement async</button>                                          
        </p>
    )
}
Counter.propTypes={
    counter:PropTypes.number.isRequired,
   dispatch:PropTypes.func.isRequired
}

export default connect(
    state=>({counter:state.counter})
)(Counter)