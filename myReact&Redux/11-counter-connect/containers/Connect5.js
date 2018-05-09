import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import * as ActionCreators from "../actions";

@connect(
    state => ({ counter: state.counter }),
    ActionCreators
  )
class Counter extends React.Component{
    static propTypes={
        counter:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        incrementIfOdd:PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired
    };
    render(){
        const { counter, increment, decrement, incrementIfOdd, incrementAsync }=this.props;
      
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
     
}

export default Counter;