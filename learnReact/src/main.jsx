const React=require("react");
const ReactDOM=require("react-dom");

const style=require("./css/style.css");
const config=require("./json/config");
const userImg=require("./img/user.png");
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

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
function Blog(props){
    const sidebar=(
        <ul>
            {
                props.posts.map((post)=>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
    );
    const content=props.posts.map((post)=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return(
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}
ReactDOM.render(
    <Blog posts={posts}/>,document.getElementById("root")
)