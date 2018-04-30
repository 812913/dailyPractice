const React=require("react");
const ReactDOM=require("react-dom");
const createReatClass=require("create-react-class");
//const h=require("react-hyperscript");
// const h=require("react-hyperscript");
// const {div,span,h1}=require("hyperscript-helpers")(h);

const style=require("./css/style.css");
// const config=require("./json/config");
// const userImg=require("./img/user.png");

// function Htest(){
//         return div('#main',"hyperscript helpers");
// }
// ReactDOM.render(<Htest/>,document.getElementById("root"));

// var Htest=createReatClass({
//     render(){
//         return (
//             h("div.example",[
//                 h('h1#heading','This is hyperscript'),
//                 h('h2','create React.js markup')
//             ])
//         )
//     }
// })
// ReactDOM.render(<Htest/>,document.getElementById("root"));


//ReactDOM.render("Hello world",document.getElementById("root"));

// let user={
//     firstName:"L",
//     lastName:"wf"
// };
// function getFullName(){
//     return user.firstName+user.lastName;
// }
// let element=<h1 className={style.greeting}>
//     Hello,{getFullName()}!
// </h1>

// let element=React.createElement(
//     'h1',
//     {className:style.greeting},
//     config.greetText
// )
// ReactDOM.render(element,document.getElementById("root"));

// function tick(){
//     let element=(
//         <div>
//             <h1>Hello,world</h1>
//             <h2>It is {new Date().toLocaleDateString()}</h2>
//             </div>
//     )
//     ReactDOM.render(element,document.getElementById("root"));
// }
// setInterval(tick,1000);




 //function Welcome(props){
     
//     return <h1>Hello,{props.name}</h1>
// }
// class Welcome extends React.Component{
//     render(){
//         return <h1>Hello,{this.props.name}</h1>
//     }
// }
// ReactDOM.render(<Welcome name="lwf"/>,document.getElementById("root"));

// const user={
//     imgUrl:userImg,
//     userName:"lwf",
//     comment:"可真棒！"
// }
// function User(props){
//     return <div>
//         <img src={props.user.imgUrl} alt={props.user.userName}/>
//     </div>
// }
// function CommentText(props){
//     return <div>
//         {props.user.comment}
//     </div>
// }
// function UserInfo(props){
//     return <div>{props.user.userName}</div>
// }
// function Comment(props){
//     return <div>
//         <User user={props.user}/>
//         <UserInfo user={props.user}/>
//         <CommentText user={props.user}/>
//         </div>
// }
// ReactDOM.render(<Comment user={user}/>,document.getElementById("root"));


// function Clock(props){
//     return (<div>
//         <h1>Hello World</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>)
// }
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//       );
// }
// setInterval(tick,1000);

// class Clock extends React.Component{
//     constructor(props){
//         super(props),
//         this.state={date:new Date()}
//     }
//     componentDidMount(){
//         this.timeID=setInterval(()=>this.tick(),1000);
//     }
//     componentWillMount(){
//         clearInterval(this.timeID);
//     }
//     tick() {
//         this.setState({
//             date:new Date()
//         })
//     }
//     render(){return(
//         <div>
//         <h1>Hello World</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//     )}
// }

// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );

// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={isToggleOn:true};
//         this.handleClick=this.handleClick.bind(this);
//     }
//     handleClick(){
//         // this.setState({
//         //     isToggleOn:!this.state.isToggleOn
//         // })
//         this.setState((prevState)=>({isToggleOn:!prevState.isToggleOn}))
//     }
//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn?"On":"Off"}
//             </button>
//         )
//     }

    
// }
// ReactDOM.render(<Toggle/>,document.getElementById("root"));

// const numbers=[1,2,3,4];
// const double=numbers.map((item)=>item*2);
// console.log(double);
// const listItems=numbers.map((item)=>
//     <li>{item*2}</li>
// );
// ReactDOM.render(
//     <ul>{listItems}</ul>,document.getElementById("root")
// )

// function NumberList(props){
//     const numbers=props.numbers;
//     const listItems=numbers.map((number,index)=>
//         <li key={index}>{number}</li>
//     )
//     return <ul>{listItems}</ul>
// }
// ReactDOM.render(<NumberList numbers={[1,2,3,4]}/>,document.getElementById("root"))

// function ListItems(props){
//     return <li>{props.number}</li>
// }
// function NumberList(props){
//     const numbers=props.numbers;
//     const listItems=numbers.map((number)=>
//         <ListItems key={number.toString()} number={number}/>
//     )
//     return <ul>{listItems}</ul>
// }
// ReactDOM.render(<NumberList numbers={[1,2,3]}/>,document.getElementById("root"));

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];
// function Blog(props){
//     const sidebar=(
//         <ul>
//             {
//                 props.posts.map((post)=>
//                     <li key={post.id}>{post.title}</li>
//                 )
//             }
//         </ul>
//     );
//     const content=props.posts.map((post)=>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return(
//         <div>
//             {sidebar}
//             <hr/>
//             {content}
//         </div>
//     )
// }
// ReactDOM.render(
//     <Blog posts={posts}/>,document.getElementById("root")
// )

// class Form extends React.Component{
//    constructor(props){
//        super(props);
//        this.state={value:''};
//        this.handleChange=this.handleChange.bind(this);
//        this.handleSubmit=this.handleSubmit.bind(this);
//    }
//    handleChange(e){
//        this.setState({value:e.target.value.toUpperCase()});
//    }
//    handleSubmit(e){
//        alert("You name is "+this.state.value);
//        e.preventDefault();
//    }
//    render(){
//        return <form>
//            <label>
//                name:<textarea onChange={this.handleChange} value={this.state.value}/>
//            </label>
//            <input type="submit" onClick={this.handleSubmit}/>
//            </form>
//    }
// }
// ReactDOM.render(<Form/>,document.getElementById("root"))

// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={value:'li'};
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleChange(e){
//         this.setState({value:e.target.value});
//     }
//     handleSubmit(e){
//         alert("You name is "+this.state.value);
//         e.preventDefault();
//     }
//     render(){
//         return <form>
//             <select  value={this.state.value} onChange={this.handleChange}>
//                 <option value="lwf">lwf</option>
//                 <option value="lee">lee</option>
//                 <option value="li">li</option>
//                 <option value="lwf123">lwf123</option>                
//                 </select>
//             <input type="submit" onClick={this.handleSubmit}/>
//             </form>
//     }
//  }
//  ReactDOM.render(<Form/>,document.getElementById("root"))

// class FileInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleSubmit(e){
//         e.preventDefault();
//         alert(`Your file name is ${this.fileInput.files[0].name}`)
//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     fileName is <input type="file" ref={input=>{this.fileInput=input}}/>
//                     </label>
//                     <button type="submit">提交</button>
//             </form>
//         )
//     }
// }

// ReactDOM.render(<FileInput/>,document.getElementById("root"))

// class Reservation extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             isGoing:true,
//             guestNumber:1
//         }
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleChange(e){
//         let value=e.target.type=='checkbox'?e.target.checked:e.target.value;
//         let name=e.target.name;
//         this.setState({
//             [name]:value
//         })
//     }
//     handleSubmit(e){
//         e.preventDefault();
//         alert("You guest number is "+this.state.guestNumber)
//     }
//     render(){
//         return (
//             <form>
//                 <label>
//                     is going:<input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange}/>
//                 </label>
//                 <input type="number" name="guestNumber" value={this.state.guestNumber} onChange={this.handleChange}/>
//                <input type="submit" onClick={this.handleSubmit}/>
//                 </form>
//         )
//     }
// }
// ReactDOM.render(<Reservation/>,document.getElementById("root"))

// function BoilingVerdict(props){
//     if(props.celsius>=100){
//         return <p>水会被烧开</p>
//     }else{
//         return <p>水不会被烧开</p>
//     }
// }

// class Calculator extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={temperature:''};
//         this.handleChange=this.handleChange.bind(this);
//     }
//     handleChange(e){
//         this.setState({temperature:e.target.value})
//     }
//     render(){
//         return(
//         <form>
//             <fieldset>
//                 <input value={this.state.temperature} onChange={this.handleChange}/>
//                 <legend><BoilingVerdict celsius={this.state.temperature}/></legend>
//             </fieldset>
           
//         </form>
//         )
//     }
        
// }
// ReactDOM.render(<Calculator/>,document.getElementById("root"));

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
//   };
  
//   function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
  
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
  
//   function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//       return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
//   }
  
//   class TemperatureInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(e) {
//       this.props.onTemperatureChange(e.target.value);
//     }
  
//     render() {
//       const temperature = this.props.temperature;
//       const scale = this.props.scale;
//       return (
//         <fieldset>
//           <legend>Enter temperature in {scaleNames[scale]}:</legend>
//           <input value={temperature}
//                  onChange={this.handleChange} />
//         </fieldset>
//       );
//     }
//   }
  
//   class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//       this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//       this.state = {temperature: '', scale: 'c'};
//     }
  
//     handleCelsiusChange(temperature) {
//       this.setState({scale: 'c', temperature});
//     }
  
//     handleFahrenheitChange(temperature) {
//       this.setState({scale: 'f', temperature});
//     }
  
//     render() {
//       const scale = this.state.scale;
//       const temperature = this.state.temperature;
//       const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//       const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
//       return (
//         <div>
//           <TemperatureInput
//             scale="c"
//             temperature={celsius}
//             onTemperatureChange={this.handleCelsiusChange} />
//           <TemperatureInput
//             scale="f"
//             temperature={fahrenheit}
//             onTemperatureChange={this.handleFahrenheitChange} />
//           <BoilingVerdict
//             celsius={parseFloat(celsius)} />
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Calculator />,
//     document.getElementById('root')
//   );
  
// function FancyBorder(props){
//     return (
//         <div className={"style.fancyBorder style.fancyBorder-"+props.color}>
//             {props.children}
//         </div>
//     )
// }
// function Dialog(props){
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">{props.title}</h1>
//             <p className="Dialog-message">{props.message}</p>
//             {props.children}
//         </FancyBorder>
//     )
// }
// function WelcomeDialog(){
//     return (
//        <Dialog title="lwf" message="welcome"/>
//     )
// }

// class SignUpDialog extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={value:''};
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSignUp=this.handleSignUp.bind(this);
//     }
//     handleChange(e){
//       this.setState({value:e.target.value})
//     }
//     handleSignUp(e){
//         e.preventDefault();
//         alert(`Welcome `+this.state.value)
//     }
//     render(){
//         return(
//             <Dialog title="欢迎" message="lwf">
//             <form>
//                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 <button onClick={this.handleSignUp}>欢迎</button>
//                 </form>
//             </Dialog>
//         )
//     }
// }
// ReactDOM.render(<SignUpDialog/>,document.getElementById("root"));

//可搜索的产品数据表格
// class ProductCategoryRow extends React.Component{
//    render(){
//      return <tr><th colSpan="2">{this.props.category}</th></tr>;
//        }
// }
// class ProductRow extends React.Component{
//     render(){
//         let name=this.props.product.stocked?this.props.product.name:<span style={{color:"red"}}>{this.props.product.name}</span>
//         return (
//             <tr>
//                 <td>{name}</td>
//                 <td>{this.props.product.price}</td>
//             </tr>
//         )
//     }
// }

// class ProductTable extends React.Component{
//     render(){
//         var rows=[];
//         var lastCategory=null;
//         this.props.products.forEach((product) => {
//             if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
//               return;
//             }
//             if (product.category !== lastCategory) {
//               rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//             }
//             rows.push(<ProductRow product={product} key={product.name} />);
//             lastCategory = product.category;
//           });
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th> 
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows}
//                     </tbody>
//                 </table>
//         )
//     }
// }

// class SearchBar extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
//         this.handleInSockOnlyChange=this.handleInSockOnlyChange.bind(this);
//     }
//     handleFilterTextChange(e){
//         this.props.onFilterText(e.target.value)
//     }
//     handleInSockOnlyChange(e){
//         this.props.onInSockOnly(e.target.checked)
//     }
//     render(){
//         return (
//             <form>
//                 <input type="text" placeholder="Searching ..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
//                 <p><input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInSockOnlyChange}/>{' '}Only show products in stock</p>
//                 </form>
//         )
//     }
// }

// class FilterableProductTable extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={filterText:'',inStockOnly:false};
//         this.handleFilterText=this.handleFilterText.bind(this);
//         this.handleInSockOnly=this.handleInSockOnly.bind(this);
//     }
//     handleFilterText(filterText){
//         this.setState({filterText:filterText})
//     }
//     handleInSockOnly(inStockOnly){
//         this.setState({inStockOnly:inStockOnly})
//     }
//     render(){
//         return(
//             <div>
//             <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterText={this.handleFilterText} onInSockOnly={this.handleInSockOnly}/>
//             <ProductTable products={this.props.products}  filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
//         </div>
//         )
//     }
// }

// let PRODUCTS= [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//   ];
//  ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,document.getElementById("root")); 

// class CustomTextInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.focus=this.focus.bind(this);
//     }
//     focus(){
//         this.textInput.focus();
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" ref={(input)=>{this.textInput=input;}}/>
//                 <input type="button" value="Focus the text input" onClick={this.focus}/>
//                 </div>
//         )
//     }
// }

// class AutoFocusTextInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.textInput=React.createRef();
//     }
//     componentDidMount(){
//         this.textInput.current.focusTextInput();
//     }
//     render(){
//         return (
//             <CustomTextInput ref={this.textInput}/>
//         )
//     }
// }
// ReactDOM.render(<CustomTextInput/>,document.getElementById("root"));

// function CustomTextInput(props){
//     let textInput=null;
//     function handleClick(){
//         textInput.focus();
//     }
//     return (
//         <div>
//             <input type="text" ref={(input)=>{textInput=input}}/>
//             <input type="button" value="Focus the text input" onClick={handleClick}/>
//         </div>
//     )
// }
// ReactDOM.render(<CustomTextInput/>,document.getElementById("root"));

// function CustomTextInput(props){
//     return (
//         <div>
//             <input ref={props.inputRef}/>
//         </div>
//     )
// }
// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.inputElement=React.createRef();
//     }
//     render(){
//         return <CustomTextInput inputRef={this.inputElement}/>
//     }
// }

// class CustomTextInput extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.textInput = null;
  
//       this.setTextInputRef = element => {
//         this.textInput = element;
//       };
  
//       this.focusTextInput = () => {
//         // 直接使用原生 API 使 text 输入框获得焦点
//         if (this.textInput) this.textInput.focus();
//       };
//     }
  
//     componentDidMount() {
//       // 渲染后文本框自动获得焦点
//       this.focusTextInput();
//     }
  
//     render() {
//       // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
//       // 实例上（比如 this.textInput）
//       return (
//         <div>
//           <input
//             type="text"
//             ref={this.setTextInputRef}
//           />
//           <input
//             type="button"
//             value="Focus the text input"
//             onClick={this.focusTextInput}
//           />
//         </div>
//       );
//     }
//   }
// ReactDOM.render(<CustomTextInput/>,document.getElementById("root"));


// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleSubmit(e){
//         alert("a name was submitted "+this.input.value);
//         e.preventDefault();
//     }
//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:<input defaultValue="lwf" type="text" ref={(input)=>this.input=input}/>
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<NameForm/>,document.getElementById("root"));

// class FileInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);

//     }
//     handleSubmit(e){
//         e.preventDefault();
//         alert("the file is submitted is "+this.fileInput.files[0].name);
//     } 
//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type="file" ref={input=>{this.fileInput=input}}/>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<FileInput/>,document.getElementById("root"));

// const ThemeContext=React.createContext("light");

// function ThemeButton(props){
//         return (
//                 <ThemeContext.Consumer>
//                         {theme=><Button {...props} theme={theme} />}
//                 </ThemeContext.Consumer>
//         )
// }
// function Toolbar(props){
//         return (
//                 <div>
//                         <ThemeButton />
//                 </div>
//         )
// }
// class App extends React.Component{
//         render(){
//                 return(
//                         <ThemeContext.Provider value="dark"><Toolbar/></ThemeContext.Provider>
//                 )
//         }
// }

// import {ThemeContext,themes} from "./theme-context.js";
// import ThemeButton from "./themed-button.js";

// function Toolbar(props){
//         return (
//                 <ThemeButton onClick={props.changeTheme}>
//                         Change Theme
//                 </ThemeButton>
//         )
// }

// class App extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.state={theme:themes.light};
//                 this.toggleTheme=this.toggleTheme.bind(this);
//         }
//         toggleTheme(){
//                 this.setState(state=>({
//                         theme:
//                                 state.theme===themes.dark?themes.light:themes.dark
//                 }))
//         }
//         render(){
//                 return(
//                         <div>
//                                 <ThemeContext.Provider value={this.state.theme}>
//                                         <Toolbar changeTheme={this.toggleTheme}/>
//                                         <section>
//                                                 <ThemeButton />
//                                         </section>
//                                 </ThemeContext.Provider>

//                         </div>
//                 )
//         }
// }
// ReactDOM.render(<App/>,document.getElementById("root"));


// import {ThemeContext,themes} from "./theme-context.js";
// import ThemeButton from "./themed-button.js";

// class App extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.state={theme:themes.light,toggleSheme:this.toggleTheme};
//                 this.toggleTheme=()=>{
//                         this.setState(state=>({
//                                 theme:state.theme===themes.dark?themes.light:themes.dark
//                         }))
//                 }
//         }
       
//         render(){
//                 return(
//                         <div>
//                                 <ThemeContext.Provider value={this.state}>
//                                        <Content/>
//                                 </ThemeContext.Provider>

//                         </div>
//                 )
//         }
// }

// function Content() {
//         return (
//           <div>
//             <ThemeButton />
//           </div>
//         );
//  }
// ReactDOM.render(<App/>,document.getElementById("root"));

// class Columns extends React.Component{
//         render(){
//                 return (
//                         <React.Fragment>
//                         <td></td>
//                         <td></td>
//                         </React.Fragment>
//                 )
//         }
// }

// funcion Glossary(props){
//         return (
//                 <dl>
//                         {
//                                 props.items.map((item)=>(
//                                         <React.Fragment key={item.id}>
//                                                 <dt>{item.term}</dt>
//                                                 <dd>{item.description}</dd>
//                                                 </React.Fragment>
//                                 ))
//                         }
//                 </dl>
//         )
// }

// var appRoot=document.getElementById("app-root");
// var modalRoot=document.getElementById("modal-root");

// class Modal extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.el=document.createElement("div");
//         }

//         componentDidMount(){
//                 modalRoot.appendChild(this.el);
//         }

//         componentWillUnmount(){
//                 modalRoot.removeChild(this.el);
//         }
//         render(){
//                 return ReactDOM.createPortal(
//                         this.props.children,
//                         this.el
//                 )
//         }

// }
// class Parent extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.state={clicks:0};
//                 this.handleClick=this.handleClick.bind(this);
//         }
//         handleClick(){
//                 this.setState(prevState=>({
//                         clicks:prevState.clicks+1
//                 }))
//         }
//         render(){
//                 return(
//                         <div onClick={this.handleClick}>
//                                 <p>Number of click:{this.state.clicks}</p>
//                                 <p>Open up the browser DevTools
//                                         to observe that the button
//                                         is not a child of the div
//                                         with the onClick handler.
//                                 </p>
//                                 <Modal><Child/></Modal>
//                         </div>
//                 )
//         }
// }
        
// function Child(){
//         return (
//                 <div className={style.modal}><button>Click</button></div>
//         )
// }
// ReactDOM.render(<Parent />,appRoot)


// class ErrorBoundary extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.state={error:null,errorInfo:null};
//         }
//         componentDidCatch(error,errorInfo){
//                 this.setState({
//                         error:error,
//                         errorInfo:errorInfo
//                 })
//         }
//         render(){
//                 if(this.state.errorInfo){
//                         return (
//                                 <div>
//                                         <h2>Something went wrong</h2>
//                                         <details style={{whiteSpace:'pre-wrap'}}>
//                                                 {this.state.error&&this.state.error.toString()}
//                                                 <br/>
//                                                 {this.state.errorInfo.componentStack}
//                                         </details>
//                                 </div>
//                         )
//                 }
//                 return this.props.children;
//         }
// }

// class BuggyCounter extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.state={counter:0};
//                 this.handleClick=this.handleClick.bind(this);
//         }
//         handleClick(){
//                 this.setState(({counter})=>({
//                         counter:counter+1
//                 })
//                 )
//         }
//         render(){
//                 if(this.state.counter==5){
//                         throw new Error("I crashed");
//                 }
//                 return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
//         }
// }
// function App(){
//         return (
//                <div>
//                <ErrorBoundary>
//                        <BuggyCounter/>
//                        <BuggyCounter/>
//                </ErrorBoundary>
//                <hr/>
//                <ErrorBoundary>
//                        <BuggyCounter/>
//                        <BuggyCounter/>
//                </ErrorBoundary>
//                        </div>
//         )
// }
// ReactDOM.render(<App/>,document.getElementById("root"));

// class Cat extends React.Component{
//         render(){
//                 return (
//                         <img src={require("./img/user.png")} style={{ position:"absolute",
//                         left:this.props.mouse.x,
//                         top:this.props.mouse.y}}/>

//                 )
//         }
// }
// class Mouse extends React.Component{
//         constructor(props){
//                 super(props);
//                 this.handleMouseMove=this.handleMouseMove.bind(this);
//                 this.state={
//                         x:0,
//                         y:0
//                 }
//         }
//         handleMouseMove(e){
//                 this.setState({
//                         x:e.clientX,
//                         y:e.clientY
//                 })
//         }
//         render(){
//                 var divStyle={
//                         background:`url(${require("./img/1.jpg")})`,
//                         height:"400px"      
//                 }
//                 return (
//                        <div style={divStyle}  onMouseMove={this.handleMouseMove}>
//                                 {/* <Cat mouse={this.state}/> */}
//                                 {this.props.render(this.state)}
//                         </div>
//                 )
//         }
// }

// class MouseTrace extends React.Component{
//         render(){
//                 return(
//                         <div>
//                                 <h1>Mouse the move around</h1>
//                                 <Mouse render={mouse=>(
//                                         <Cat mouse={mouse}/>
//                                         )}/>
//                         </div>
//                 )
//         }
// }
// ReactDOM.render(<MouseTrace/>,document.getElementById("root"));

class Chosen extends React.Component {
        componentDidMount() {
          this.$el = $(this.el);
          this.$el.chosen();
      
          this.handleChange = this.handleChange.bind(this);
          this.$el.on('change', this.handleChange);
        }
        
        componentDidUpdate(prevProps) {
          if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
          }
        }
      
        componentWillUnmount() {
          this.$el.off('change', this.handleChange);
          this.$el.chosen('destroy');
        }
        
        handleChange(e) {
          this.props.onChange(e.target.value);
        }
      
        render() {
          return (
            <div>
              <select className={style.Chosen-select} ref={el => this.el = el}>
                {this.props.children}
              </select>
            </div>
          );
        }
      }
      
      function Example() {
        return (
          <Chosen onChange={value => console.log(value)}>
            <option>vanilla</option>
            <option>chocolate</option>
            <option>strawberry</option>
          </Chosen>
        );
      }
ReactDOM.render(<Example/>,document.getElementById('root'));