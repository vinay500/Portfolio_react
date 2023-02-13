import { createContext,useReducer } from "react";

export const ThemeContext = createContext();

const INTITIAL_STATE = {darkMode:false};

// creating this themeReducer to change darkMode to true in INTITIAL_STATE
const themeReducer = (state,action)=>{
    switch(action.type){
        case 'TOGGLE':
            return {darkMode:!state.darkMode};
            default:
                return state;
    }
}


export const ThemeProvider = (props)=>{
    const [state, dispatch] = useReducer(themeReducer, INTITIAL_STATE);
    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}