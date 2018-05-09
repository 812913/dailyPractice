export default function counter(state=0,action){
    switch(action.type){
        case "INCREMENT": return state+1;//注意不能为state++
        case "DECREMENT": return state-1;
        default: return state;
    }
}