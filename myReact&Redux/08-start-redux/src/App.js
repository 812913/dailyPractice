import {createStore} from "redux";
function counter(state=0,action){
    switch(action.type){
        case 'INCREMENT':state++;return state;
        case 'DECREMENT':state--;return state;
        default: return state;
    }
}
let store=createStore(counter);

let currentValue=store.getState();
const listener=()=>{
    const previousValue=currentValue;
    currentValue=store.getState();
    console.log('Pre state:',previousValue,'Next state:',currentValue);
};
store.subscribe(listener);

function increment(){
    return {type:'INCREMENT'}
}
function decrement(){
    return {type:'DECREMENT'}
}
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
