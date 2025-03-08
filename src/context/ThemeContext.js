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