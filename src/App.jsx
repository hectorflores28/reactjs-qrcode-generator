import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Layout/Home';
import ContactQR from './components/QRGenerators/ContactQR';
import EmailQR from './components/QRGenerators/EmailQR';
import UrlQR from './components/QRGenerators/UrlQR';
import WifiQR from './components/QRGenerators/WifiQR';
import './App.css';

const themeSettings = {
  colors: {
    primary: '#0f3460',
    accent: '#4db8ff',
    text: '#ffffff',
    background: {
      primary: '#2D3436',
      secondary: '#000000',
      glass: 'rgba(45, 52, 54, 0.7)',
      form: 'rgba(255, 255, 255, 0.05)',
      card: 'rgba(255, 255, 255, 0.08)',
      hover: 'rgba(255, 255, 255, 0.12)'
    },
    border: 'rgba(255, 255, 255, 0.1)',
    hover: {
      background: 'rgba(255, 255, 255, 0.1)',
      text: '#4db8ff'
    },
    success: '#00B894',
    error: '#FF7675',
    warning: '#FDCB6E',
    info: '#74B9FF'
  },
  spacing: {
    xs: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    xl: '3rem'
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '20px',
    circle: '50%'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.2s ease',
    slow: 'all 0.5s ease',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 6px rgba(0,0,0,0.1)',
    large: '0 10px 15px rgba(0,0,0,0.1)',
    glow: '0 0 20px rgba(77, 184, 255, 0.3)'
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    sizes: {
      xs: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem'
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600
    }
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  }
};

const App = () => {
  return (
    <ThemeContext.Provider value={themeSettings}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactQR />} />
          <Route path="/email" element={<EmailQR />} />
          <Route path="/url" element={<UrlQR />} />
          <Route path="/wifi" element={<WifiQR />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;