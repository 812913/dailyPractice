import React,{PropTypes} from "react";
function Button(props,context){
    return(
        <button style={{background:context.color}}>
            {props.children}
        </button>
    )
}

Button.prototype={
    children:PropTypes.string.isRequired
};
Button.contextTypes={
    color:PropTypes.string.isRequired
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

class MessageList extends React.Component{
    getChildContext(){
        return {color:"grey"};
    }
    render(){
        const messages=[
            {text:"Hello React"},
            {text:"Hello Redux"}
        ]; 
        const children=messages.map((message,key)=>
        <Message key={key}  text={message.text}/>);
        return (
            <div>
                <p>通过context跨级将color属性传给里面的Button组件</p>
                <ul>
                {children}
                    </ul>
            </div>
        )
    }
}
MessageList.childContextTypes={
    color:PropTypes.string.isRequired
}


export default MessageList;
