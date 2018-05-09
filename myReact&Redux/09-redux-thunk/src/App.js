import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";

function increment(){
    return {type:'INCREMENT'}
}
function decrement(){
    return {type:'DECREMENT'}
}
function incrementIfOdd(){
    return (dispatch,getState)=>{
        if(getState()%2==0){
            return;
        }else{
            dispatch(increment());
        }
    }
}
function incrementAsync(delay=1000){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment())
        },delay);
    };
}

function counter(state=0,action){
    switch(action.type){
        case 'INCREMENT':state++;return state;
        case 'DECREMENT':state--;return state;
        default: return state;
    }
}
let store=createStore(counter,applyMiddleware(thunk));

let currentValue=store.getState();
const listener=()=>{
    const previousValue=currentValue;
    currentValue=store.getState();
    console.log('Pre state:',previousValue,'Next state:',currentValue);
};
store.subscribe(listener);


store.dispatch(increment());
store.dispatch(incrementIfOdd());
store.dispatch(incrementAsync());
store.dispatch(incrementIfOdd());
store.dispatch(decrement());
