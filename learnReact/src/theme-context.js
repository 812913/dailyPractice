const React=require("React");
export const themes={
    light:{
        foreground:"#fff",
        background:'#222',
    },
    dark:{
        foreground:"#000",
        background:"#eee",
    }
}
export const ThemeContext=React.createContext({
    theme:themes.dark,
    toggleTheme:()=>{}
})