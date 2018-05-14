import {connect} from "react-redux";
import Counter from "../components/Counter";
import * as ActionCreators from "../actions/index";

export default connect(
    state=>({counter:state.counter}),
    ActionCreators
)(Counter);
