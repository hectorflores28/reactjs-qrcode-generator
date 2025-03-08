import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext';
import MainMenu from './components/Layout/MainMenu';

import ContactQR from './components/QRGenerators/ContactQR';
import EmailQR from './components/QRGenerators/EmailQR';
import UrlQR from './components/QRGenerators/UrlQR';
import WifiQR from './components/QRGenerators/WifiQR';

const App = () => {
  return (
    <ThemeContext.Provider>
      <Router>
        <div className="app-container">
          <MainMenu />
          <Routes>
          <Route path="/contact" element={<ContactQR />} />
          <Route path="/email" element={<EmailQR />} />
          <Route path="/url" element={<UrlQR />} />
          <Route path="/wifi" element={<WifiQR />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;