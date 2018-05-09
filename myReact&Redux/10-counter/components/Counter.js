import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component{
    constructor(props){
        super(props);
       this.incrementIfOdd=this.incrementIfOdd.bind(this);
       this.incrementAsync=this.incrementAsync.bind(this);
    }
    incrementIfOdd(){
        if(this.props.value%2==0){
            return;
        }else{
            this.props.onIncrement();
        }
    }
    incrementAsync(){
        setTimeout(this.props.onIncrement,1000);
    }

    render(){
        const {value,onIncrement,onDecrement}=this.props;
        return (
            <p>Clicked:{value} times.
                {" "}
                <button onClick={onIncrement}>+</button>
                {" "}
                <button onClick={onDecrement}>-</button>
                {" "}
                <button onClick={this.incrementIfOdd}>Increment if Odd</button> 
                {" "}     
                <button onClick={this.incrementAsync}>InCrement async</button>                                          
            </p>
        )
    }
}
Counter.propTypes={
    value:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired
}
export default Counter;