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
    text: '#ffffff'
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