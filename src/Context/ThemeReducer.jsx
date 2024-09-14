import { createContext, useReducer } from 'react';


const initialState = {
    theme: 'light',
  };

const ThemeReducer = (state, action) => {
  
    switch (action.type) {
        case 'TOGGLE_THEME':
          return {
            ...state,
            theme: state.theme === 'light' ? 'dark' : 'light', // Cambia entre claro y oscuro
          };
        default:
          return state;
      }
  
      export const themeContext = createContext();

      export const ThemeProvider = ({ children }) => {
        const [state, dispatch] = useReducer(themeReducer, initialState);
      
        return (
          <ThemeContext.Provider value={{ theme: state.theme, dispatch }}>
            {children}
          </ThemeContext.Provider>
        );
      };
}

export default ThemeReducer
