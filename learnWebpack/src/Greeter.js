// var config=require('./config.json');

// module.exports=function(){
//     var greet=document.createElement('div');
//     greet.textContent=config.greetText;
//     return greet;
// };
import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';
// import scssTest from './test.scss';
class Greeter extends Component{
  render() {
    return (
     <div className={styles.root}>
        {config.greetText}
      </div> 
  );
  }
}

export default Greeter

// export default()=>{
//   return (
//       <div className="root">
//         Hello world
//       </div>
//   )
// }