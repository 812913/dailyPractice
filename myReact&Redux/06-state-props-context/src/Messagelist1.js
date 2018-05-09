import React,{PropTypes} from "react";
function Button(props){
    return(
        <button style={{background:props.color}}>
            {props.children}
        </button>
    )
}

Button.prototype={
    color:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
};

function Message(props){
    return (
        <li>
            {props.Text} <Button color={props.color}>Delete</Button>
        </li>
    )
}

Message.PropTypes={
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
};

function MessageList(){
    const color='red';
    const messages=[
        {text:"Hello React"},
        {text:"Hello Redux"}
    ];
    const children=messages.map((message,key)=>
    <Message key={key} color={color} text={message.text}/>
);
return (
    <div>
        <p>通过props将里面的color属性逐层的传给里面的Button组件</p>
        <ul>
        {children}
            </ul>
    </div>
)
}
export default MessageList;
