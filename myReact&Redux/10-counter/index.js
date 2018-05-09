import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";

const store=createStore(counter);
const rootEle=document.querySelector("#root");

function render() {
    ReactDOM.render(
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />,
      rootEle
    );
  }  
render();
store.subscribe(render);

