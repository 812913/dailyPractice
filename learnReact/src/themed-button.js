const React=require("react");
import {ThemeContext} from './theme-context.js';
function ThemeButton(){
    return (
        <ThemeContext.Consumer>
            {
               ({theme,toggleTheme})=>(
                   <button onClick={toggleTheme} style={{backgroundColor:theme.background}}>
                        Toggle theme
                   </button>
               )
            }
        </ThemeContext.Consumer>
    )
}
export default ThemeButton;