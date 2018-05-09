import React, { Component } from 'react';
import Counter from "./Counter";
import MessageList from "./Messagelist1";
import AntherMessageList from "./Messagelist2";

// export default function App() {
//   return <h1>hello world</h1>;
// }
export default class App extends Component { // eslint-disable-line
  render() {
    // console.log('Source Map Testing');
    // throw new Error();
    return(
      <div>
        <h2>state和props</h2>
        <Counter />
        <h2>Context-通过props逐层传递数据</h2>
        <MessageList />
        <h2>Context-通过Context跨层传递数据</h2>
        <AntherMessageList/>
        {console.log(<h1>lwf</h1>)}
        {console.log(<Counter/>)}
      </div>
    )
  }
}
