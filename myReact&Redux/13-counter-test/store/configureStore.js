import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

export default function configureStore(initialState){
    const store=createStore(rootReducer,initialState,applyMiddleware(thunk));
    if(module.hot){
        module.hot.accept("../reducers/index",()=>{
            const nextRootReducer=require("../reducers").default;
            store.replaceReducer(nextRootReducer);
        });
    
    }
    return store;
}
