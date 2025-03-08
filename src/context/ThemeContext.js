import { createContext } from 'react';

export const ThemeContext = createContext({
  colors: {
    primary: '#1a1a2e',
    secondary: '#16213e',
    text: '#ffffff',
    accent: '#0f3460',
    gradient: 'linear-gradient(to right, #0f3460, #1a1a2e)'
  }
});
export const ThemeProvider = ({ children }) => {
    const theme = {
      colors: {
        text: '#FFFFFF',
        accent: '#4db8ff'
      }
    };
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
  };